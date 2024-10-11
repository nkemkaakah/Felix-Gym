import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import React, { useEffect, useState } from 'react';

const questions = [
  { question: 'What is your fitness goal?', options: ['Weight Loss', 'Muscle Gain', 'Improve Health and Longevity'], type: 'options' },
  { question: 'I am', options: ['Male', 'Female'], type: 'options' },
  { question: 'I am', options: ['Under 18', '18-30', '30-45', '45+'], type: 'options' },
  { question: 'Preferred training style?', options: ['Cardio', 'Strength', 'Mixed'], type: 'options' },
  { question: 'Do you need personal coaching?', options: ['Yes', 'No'], type: 'options' },
  { question: 'Please describe your current workout routine', type: 'textarea' }, // Textarea question
  { question: 'Are you comfortable with group classes?', options: ['Yes', 'No'], type: 'options' },
  { question: 'Preferred workout time?', options: ['Morning', 'Afternoon', 'Evening'], type: 'options' },

  { question: 'Contact Info', type: 'form' }
];

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contactDetails, setContactDetails] = useState({ name: '', email: '', phone: '' });
  const [optionTimeout, setOptionTimeout] = useState(null); // For

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const handleOptionClick = (option) => {
    if (isTransitioning) return; // Prevent further execution if transitioning

    setSelectedOption(option);
    setIsTransitioning(true); // Start the transition

    // Store the answer for the current question
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentStep] = option; // Set the selected option for the current step
      return newAnswers;
    });

    // Set a timeout for transitioning to the next question after 2 seconds
    const timeoutId = setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, questions.length - 1)); // Move to next question
      setSelectedOption('');
      setTextareaValue('');
      setIsTransitioning(false);
    }, 1000); // 2-second delay

    // Store the timeout ID to be able to clear it later
    setOptionTimeout(timeoutId);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleNextClick = () => {
    if (currentStep < questions.length - 1) {
      // Clear the timeout set by handleOptionClick if it exists
      clearTimeout(optionTimeout);

      // Store the answer for the current question
      setAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[currentStep] = textareaValue; // Set the textarea value for the current step
        return newAnswers;
      });

      setIsTransitioning(true); // Start transition
      setCurrentStep((prev) => Math.min(prev + 1, questions.length - 1)); // Move to next question
      setSelectedOption('');
      setTextareaValue('');
      setIsTransitioning(false);
    }
  };

  const handleBackClick = () => {
    if (currentStep > 0) {
      clearTimeout(optionTimeout); // Clear any pending timeouts
      setIsTransitioning(true); // Start transition
      setCurrentStep((prev) => Math.max(prev - 1, 0)); // Move to previous question
      setSelectedOption('');
      setTextareaValue('');
      setIsTransitioning(false);
    }
  };

  const isTextareaQuestion = questions[currentStep].type === 'textarea';
  const isFormStep = questions[currentStep].type === 'form';


  // Cleanup timeout when component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(optionTimeout); // Clear timeout if the component unmounts
    };
  }, [optionTimeout]);

  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({ ...prev, [name]: value }));
  };



  // Function to submit answers
  const handleSubmit = () => {
    // Make API call with the answers
    handleOpen()
    console.log('Submitting answers:', answers);
    // Replace the console log with your API submission logic here
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {isFormStep ? (
          <div className="flex flex-col gap-4 mr-2">
            <h2 className="text-3xl text-white font-bold mb-6">Contact Details</h2>
            <input
              type="text"
              name="name"
              value={contactDetails.name}
              onChange={handleContactDetailsChange}
              placeholder="Name"
              className="w-full max-w-lg p-4 border-gray-300 rounded-md bg-gray-100 text-black text-xl"
            />
            <input
              type="email"
              name="email"
              value={contactDetails.email}
              onChange={handleContactDetailsChange}
              placeholder="Email"
              className="w-full max-w-lg p-4 border-gray-300 rounded-md bg-gray-100 text-black text-lg"
            />
            <input
              type="tel"
              name="phone"
              value={contactDetails.phone}
              onChange={handleContactDetailsChange}
              placeholder="Phone Number"
              className="w-full max-w-lg p-4 border-gray-300 rounded-md bg-gray-100 text-black text-lg"
            />
          </div>

        ) : (
          <>
            <h2 className="text-3xl text-white font-bold mb-6">{questions[currentStep].question}</h2>
            {!isTextareaQuestion ? (
              <div className="flex flex-col gap-4">
                {questions[currentStep].options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`px-8 py-4 text-lg md:text-xl lg:text-2xl font-semibold rounded-md border border-white ${selectedOption === option ? 'bg-green-500' : 'bg-transparent'} hover:bg-green-300 transition-all duration-300`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                value={textareaValue}
                onChange={handleTextareaChange}
                className="w-full max-w-lg p-4 border border-gray-300 rounded-md bg-gray-100 text-black text-lg"
                placeholder="Describe your current workout routine"
                rows={5}
              />
            )}
          </>
        )}
      </div>
      <>

        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="flex flex-col items-center justify-center text-center" // Center the content inside the dialog
        >
          <DialogHeader className="font-bold text-[30px] md:text-[40px]">
            Thank You for Your Response!
          </DialogHeader>
          <DialogBody className="font-semibold">
            Our team will reach out to you shortly to assist with your fitness journey.
            In the meantime, feel free to contact us at
            <a href="mailto:support@gutzfit.com" className="text-green-500"> support@gutzfit.com </a>
            or call us at
            <a href="tel:+1234567890" className="text-green-500"> +1234567890</a>.
          </DialogBody>
          <DialogFooter className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <Button
              variant="gradient"
              color="green"
              onClick={handleOpen}
              className="mr-1 bg-black/90 text-white hover:scale-105"
            >
              <span>Continue as Guest</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              className="bg-black/90 text-white hover:scale-105"
              onClick={handleOpen}
            >
              <span>Register / Log In</span>
            </Button>
          </DialogFooter>
        </Dialog>


      </>

      <div className="mt-8 flex justify-center gap-20 items-center w-full max-w-md">
        <Button
          variant="outlined"
          className="text-white hover:bg-primary-100 border-white py-3 px-6"
          onClick={handleBackClick}
          disabled={currentStep === 0}
        >
          Back
        </Button>

        {isFormStep ? (
          <Button
            variant="outlined"
            className="text-white hover:bg-primary-100 border-white py-3 px-6"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="outlined"
            className="text-white hover:bg-primary-100  border-white py-3 px-6"
            onClick={handleNextClick}
            disabled={!selectedOption && !textareaValue}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};


export default Questionnaire;

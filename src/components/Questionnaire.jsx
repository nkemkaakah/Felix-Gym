/* eslint-disable no-unused-vars */
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Progress
} from "@material-tailwind/react";

import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useState } from 'react';

const questions = [
  {
    question: 'What is your main fitness goal?',
    options: [
      'Lose weight/Tone up',
      'Build muscle',
      'Improve endurance/cardio',
      'Increase strength'
    ],
    type: 'options'
  },
  { question: 'I am', options: ['Male', 'Female'], type: 'options' },
  { question: 'I am', options: ['Under 18', '18-30', '30-45', '45+'], type: 'options' },

  {
    question: 'How would you describe your current fitness level?',
    options: ['Beginner (just starting out)', 'Intermediate (some experience, but inconsistent)', 'Advanced (regular, consistent training)'],
    type: 'options'
  },
  {
    question: 'Do you have access to workout equipment?',
    options: [
      'Yes, I have weights/resistance bands, etc.',
      'No, I prefer bodyweight workouts',
      'I only have minimal equipment'
    ],
    type: 'options'
  },
  { question: 'Contact Info', type: 'form' }
];

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contactDetails, setContactDetails] = useState({ name: '', email: '', phone: '' });
  const [optionTimeout, setOptionTimeout] = useState(null); // For

  const [answers, setAnswers] = useState(
    questions.map((q) => ({
      question: q.question,
      answer: ''
    }))
  );

  useEffect(() => {
    console.log(answers)
  }, [])

  const [open, setOpen] = React.useState(false);
  const [showCongrats, setShowCongrats] = useState(false); // To toggle congratulations message
  const totalSteps = questions.length
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100
  const handleOpen = () => setOpen(!open);

  const handleOptionClick = (option) => {
    if (isTransitioning) return; // Prevent further execution if transitioning

    setSelectedOption(option);
    setIsTransitioning(true); // Start the transition

    // Store the answer for the current question
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentStep] = { ...updatedAnswers[currentStep], answer: option }; // Store both the question and answer
      return updatedAnswers;
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
    const value = e.target.value; // Get the current value from the event

    setTextareaValue(value); // Update the local state to reflect changes in the UI

    // Update the answers array with the new value
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentStep] = {
        ...updatedAnswers[currentStep], answer: value  // Save textarea input
      };
      return updatedAnswers;
    });
  };




  const handleNextClick = () => {
    if (currentStep < questions.length - 1) {
      // Clear the timeout set by handleOptionClick if it exists
      clearTimeout(optionTimeout);

      // Store the answer for the current question
      setAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        if (questions[currentStep].type === 'textarea') {
          newAnswers[currentStep] = { ...newAnswers[currentStep], answer: textareaValue }; // Preserve question, update answer
        }
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
    handleOpen();

    // Show congratulations message
    console.log("Submitting answers:", answers);
    console.log("Contact details", contactDetails);


    // Send answers and contact details to the API
    fetch('https://guzfit-backend.vercel.app/api/email/questionnare', { // Replace with your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers, contactDetails }), // Send both answers and contact details
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data); // Handle success response
      })
      .catch((error) => {
        console.error('Error:', error); // Handle error response
      });
  };

  const handleShowCongrats = () => {
    setShowCongrats(true); // Show congratulations message on guest or register click
    setOpen(false); // Close the dialog
  };

  const handleCongrats = () => {
    // Reset all states to initial values
    setCurrentStep(0);
    setSelectedOption('');
    setTextareaValue('');
    setContactDetails({ name: '', email: '', phone: '' });
    setAnswers(questions.map((q) => ({
      question: q.question,
      answer: ''
    })));

    // Optionally scroll to the top
    window.scrollTo(0, 0);

    setShowCongrats(false); // Hide the congratulations message
    setOpen(false); // Close the dialog if it’s open
  };

  return (
    <div className={`w-full h-full flex flex-col ${showCongrats ? 'items-start' : ''} items-ce justify-center`}>
      {showCongrats ? (
        <div className="w-full flex flex-col items-start mt-20 text-justify animate-fadeIn transition-all duration-500 sm:w-[80%]">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[50px] text-black uppercase font-bold mb-4 flex xs:flex-row flex-col items-center gap-2 mr-3">
            <FaCheckCircle className="text-green-500 sm:text-6xl xs:text-5xl text-3xl mb-4" />
            Congratulations!
          </h2>
          <p className="text-md sm:text-[20px] text-black mb-6 font-semibold">
            We can&apos;t wait to start working with you! Please check your email for more details.
          </p>
          <p className="text-lg text-black/60 font-semibold">
            Keep exploring the other parts of our site and feel free to reach out for any assistance.
          </p>
          <Button
            variant="outlined"
            className="mt-6 text-black border-black hover:bg-black hover:text-white hover:scale-105 py-3 px-6 transition-all duration-300"
            onClick={handleCongrats} // Option to scroll to the top
          >
            Submit another response
          </Button>
        </div>
      ) : (
        <>
          <Progress value={progressPercentage} color="green" />;


          <div
            className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            {isFormStep ? (
              <div className="flex flex-col gap-4 mr-2">
                <h2 className="text-3xl text-black font-bold mb-6">Contact Details</h2>
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
                <h2 style={{ fontFamily: "'ITC Avant Garde Gothic', sans-serif" }} className="md:text-3xl text-2xl xl:text-center lg:text-5xl text-black font-bold mb-6">{questions[currentStep].question}</h2>
                {!isTextareaQuestion ? (
                  <div className="flex flex-col gap-4 text-black">
                    {questions[currentStep].options?.map((option, index) => (
                      <button
                        style={{ fontFamily: "'ITC Avant Garde Gothic', sans-serif" }}
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`sm:px-8 sm:py-4 px-6 py-3  text-lg md:text-xl lg:text-2xl font-semibold rounded-md border border-black ${selectedOption === option ? 'bg-green-600' : 'bg-transparent'} hover:bg-green-600 transition-all duration-300`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <textarea
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    className="w-full  p-4 border border-black-300 rounded-md bg-gray-100 text-black text-lg focus:border-none outline-none"
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
                Based on your answers, we’ve selected the perfect workout plans for
                you! Click below to get started on your personalized fitness journey.
                Our team will reach out to you shortly to assist with your fitness journey.
                {/* In the meantime, feel free to contact us at
                <a href="mailto:gutzfitness@gmail.com" className="text-green-500"> gutzfitness@gmail.com </a>
                or call us at
                <a href="tel:+1234567890" className="text-green-500"> +1234567890</a>. */}
              </DialogBody>
              <DialogFooter className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <Button
                  variant="gradient"
                  color="green"
                  onClick={handleShowCongrats}
                  className="mr-1 bg-black/90 text-white hover:scale-105"
                >
                  <span>Continue as Guest</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  className="bg-black/90 text-white hover:scale-105"
                  onClick={handleShowCongrats}
                >
                  <span>Get Your Plan Now</span>
                </Button>
              </DialogFooter>
            </Dialog>


          </>

          <div className="mt-8 flex justify-center sm:flex-row flex-col sm:gap-20 gap-5 items-center w-full  ">
            <Button
              variant="outlined"
              className="text-black hover:bg-primary-100 border-black lg:text-2xl sm:py-3 sm:px-6 py-2 px-4 w-full" // Added min-width
              onClick={handleBackClick}
              disabled={currentStep === 0}
            >
              Back
            </Button>

            {isFormStep ? (
              <Button
                variant="outlined"
                className="text-black hover:bg-primary-100 border-black sm:py-3 lg:text-2xl sm:px-6 py-2 px-4 w-full" // Added min-width
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="outlined"
                className="text-black hover:bg-primary-100 border-black sm:py-3 lg:text-2xl sm:px-6 py-2 px-4 w-full" // Added min-width
                onClick={handleNextClick}
                disabled={!selectedOption && !textareaValue}
              >
                Next
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};


export default Questionnaire;

import { Button } from '@material-tailwind/react';
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
];

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [optionTimeout, setOptionTimeout] = useState(null); // For

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

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
    }, 2000); // 2-second delay

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

  // Cleanup timeout when component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(optionTimeout); // Clear timeout if the component unmounts
    };
  }, [optionTimeout]);

  // Function to submit answers
  const handleSubmit = () => {
    // Make API call with the answers
    console.log('Submitting answers:', answers);
    // Replace the console log with your API submission logic here
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        <h2 className="text-3xl text-white font-bold mb-6">{questions[currentStep].question}</h2>

        {!isTextareaQuestion ? (
          <div className="flex flex-col gap-4">
            {questions[currentStep].options.map((option, index) => (
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
      </div>

      <div className="mt-8 flex justify-center gap-20 items-center w-full max-w-md">
        <Button variant="outlined" className="text-white hover:bg-primary-100 border-white py-3 px-6"
          onClick={handleBackClick}
          disabled={currentStep === 0}>
          Back
        </Button>
        {currentStep === questions.length - 1 ? (
          <Button variant="outlined" className="text-white hover:bg-primary-100 border-white py-3 px-6"
            onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant="outlined" className="text-white hover:bg-primary-100 border-white py-3 px-6"
            onClick={handleNextClick}
            disabled={!selectedOption && !textareaValue}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};


export default Questionnaire;

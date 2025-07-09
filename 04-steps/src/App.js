import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previousStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function nextStep() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      {/* whenever we want to return two elements we can use react fragment instead of div*/}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step === 1 ? "active" : ""}`}>1</div>
            <div className={`${step === 2 ? "active" : ""}`}>2</div>
            <div className={`${step === 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousStep}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

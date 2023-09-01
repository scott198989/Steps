const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;
  
function handlePrevious (){
alert("previous");
}

function handleNext (){
  alert("Next");
}

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}></div>
        <div className={`${step >= 2 ? "active" : ""}`}></div>
        <div className={`${step >= 3 ? "active" : ""}`}></div>
      </div>
      
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff"}} 
        onClick={() => alert("Previous")}
        onclick={handlePrevious}
        >
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff"}}
          onClick={() => alert("Next")}
          onclick={handleNext}
          >
          Next
        </button>
      </div>
    </div>
  );
}

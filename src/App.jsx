import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [success, setSuccess] = useState(false);
  return (
    <div className="App">
      <h1>Form Validation</h1>
      <p>
        React form validation excercise using 'react-hook-form', 'yup', and
        '@hookform/resolvers'. In this case the information won't be submitted
        as long as an input area fails validation.
      </p>
      <Form setSuccess={setSuccess} />
      {success && (
        <div className="success">
          <h4>
            The information you have provided passed all the validations and has
            been submitted successfuly!
          </h4>
        </div>
      )}
    </div>
  );
}

export default App;

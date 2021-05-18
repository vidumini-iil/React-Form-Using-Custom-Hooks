import React, { useState } from "react";
import FormSinUp from "./FormSinUp";
import FormSucess from "./FormSucess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img src="img/img-2.svg" alt="space" className="form-img" />
        </div>
        {!isSubmitted ? <FormSinUp submitForm={submitForm} /> : <FormSucess />}
      </div>
    </>
  );
};

export default Form;

import React from "react";
import Triangle from "./Triangle";
import Button from "./Button";

const Quiz = ({ postAnswer, question }) => {
  return (
    <>
      {question.length ? (
        <>
          <h1>{question[0].question}</h1>
          <p>{question[0].options[0]}</p>
          <p>{question[0].options[1]}</p>
          <p>{question[0].options[2]}</p>

          <Triangle isSelectTriangle postAnswer={postAnswer} />
        </>
      ) : null}
    </>
  );
};

export default Quiz;

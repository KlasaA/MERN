import React, { useEffect, useState } from "react";
import Triangle from "./components/Triangle";
import List from "./components/List";
import Quiz from "./components/Quiz";

const App = ({ answersRouteService, questionsRouteService }) => {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState([]);
  const [questionNr, setQuestionNr] = useState(1);

  const getAnswers = async () => {
    const data = await answersRouteService.get();
    setAnswers(data);
  };

  const postAnswer = async (answer) => {
    await answersRouteService.post(answer);
    getAnswers();
  };

  const getQuestions = async () => {
    const data = await questionsRouteService.get(questionNr);
    setQuestion(data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="App">
      <Quiz isSelectTriangle postAnswer={postAnswer} question={question} />
      {answers.length ? (
        <React.Fragment>
          <Triangle answers={answers} />
          <List answers={answers} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default App;

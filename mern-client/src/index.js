import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import AnswersRouteService from './services/answers/AnswersRouteService';
import QuestionsRouteService from './services/answers/QuestionsRouteService';

const answersRouteService = new AnswersRouteService("answers");
const questionsRouteService = new QuestionsRouteService("questions");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App answersRouteService={answersRouteService} questionsRouteService={questionsRouteService} />
  </React.StrictMode>
);


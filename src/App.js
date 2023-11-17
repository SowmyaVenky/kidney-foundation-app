import './App.css';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { questions } from './data/questions.js';

const customCss = {
  "question": {
    "content": "question-content",
    "answered": "question-answered",
    "titleRequired": "question-title-required"
  }
};

function App() {
  const survey = new Model(questions);
  survey.css = customCss;
  return (
    <Survey model={survey}
    />);
}

export default App;

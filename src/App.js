import './App.css';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  },{
    name: "Age",
    title: "Enter your age:",
    type: "text"
  }]
};

function App() {
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
}

export default App;

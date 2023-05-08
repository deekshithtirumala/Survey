import Card from "./card";
import "./surveyForm.css";

export default function SurveyForm() {
  return (
    <div className="surveyForm">
      <div className="header">
        <h1>Survey for Insights</h1>
        <p>Tag line goes here...</p>
      </div>
      <div className="body">
        <Card type="basic" />
        <Card
          type="qestion"
          qtype="radio"
          quest="What is an"
          option={["Article", "anti"]}
        />
        <Card
          type="qestion"
          qtype="checkbox"
          quest="What is an"
          option={["Article", "anti"]}
        />
        <Card
          type="qestion"
          qtype="desc"
          quest="What is an"
          option={["Article", "anti"]}
        />
      </div>
      <div className="footer">
        <p>
          All rights and License of theme are reserved by &copy; 2019. &nbsp;
          For any quires contact through mail <a href="#">contact@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}

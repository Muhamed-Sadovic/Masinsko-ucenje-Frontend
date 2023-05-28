import React from "react";
import { useState } from "react";
import "./App.css";
import { algorithmService } from "./Services/algorithmService";
import { RiseLoader } from "react-spinners";
const App = () => {
  const [selectedOption, setSelectedOption] = useState("NAIVE");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState("");
  console.log(text);
  console.log(selectedOption);

  const onSubmitHandler = async () => {
    switch (selectedOption) {
      case "NAIVE":
        setIsLoading(true);
        let result = await algorithmService.naiveBayes(text);
        setPrediction(result.prediction);
        setIsLoading(false);
        break;
      case "KNN":
        setIsLoading(true);
        let result2 = await algorithmService.Knn(text);
        setPrediction(result2.prediction);
        setIsLoading(false);
        break;
      case "SVM":
        setIsLoading(true);
        let result3 = await algorithmService.SVM(text);
        setPrediction(result3.prediction);
        setIsLoading(false);
        break;
      case "LR":
        setIsLoading(true);
        let result4 = await algorithmService.logisticRegression(text);
        setPrediction(result4.prediction);
        setIsLoading(false);
        break;
      case "J48":
        setIsLoading(true);
        let result5 = await algorithmService.logisticRegression(text);
        setPrediction(result5.prediction);
        setIsLoading(false);
        break;

      default:
        break;
    }
  };
  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>Algorithm Classification</h1>
        <div className="input-group">
          <label htmlFor="inputField">Input Field:</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            id="inputField"
          />
        </div>
        <div className="input-group">
          <label htmlFor="selectField">Selection Field:</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            id="selectField"
          >
            <option value="NAIVE">Naive Bayes</option>
            <option value="KNN">KNN</option>
            <option value="SVM">SVM</option>
            <option value="LR">Logistic Regression</option>
            <option value="J48">J48</option>
          </select>
        </div>
        <button onClick={onSubmitHandler} type="submit" className="submit-button">
          Submit
        </button>
        <h1 style={{ textAlign: "left" }}>Output:</h1>
        <div
          style={{ width: "100%", backgroundColor: "#222222", height: "200px" }}
        >
          {isLoading===false?
          <h2 style={{ color: "orange" }}>{prediction}</h2>
        :<div style={{margin:"auto",paddingTop:"80px"}} ><RiseLoader  color="orange" />  </div>
        }
          </div>
      </div>
    </div>
  );
};

export default App;

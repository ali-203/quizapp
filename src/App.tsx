import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizDetails} from "./services/quiz_service";
import {Quiz} from './Types/quiz_types';
import QuestionCard from "./Components/QuestionCard";

function App() {
  let [quiz, setQuiz] = useState<Quiz[]>([])
  
useEffect(()=> {
  async function fetchData(){
    const questions:Quiz[] = await getQuizDetails(10, 'easy');
console.log(questions);
setQuiz(questions)
  }
  fetchData();
}, []);



  return (
    <div className="App">
      <QuestionCard />
    </div>

  );
}

export default App;

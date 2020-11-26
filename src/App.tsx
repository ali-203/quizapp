import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizDetails} from "./services/quiz_service";
import {QuestionType} from './Types/quiz_types';
import QuestionCard from "./Components/QuestionCard";

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  
useEffect(()=> {
  async function fetchData(){
    const questions:QuestionType[] = await getQuizDetails(10, 'easy');
console.log(questions);
setQuiz(questions)
  }
  fetchData();
}, []);

if (!quiz.length)
return <h3>Loading.. </h3>

  return (
    <div className="App">
      <QuestionCard 
      options={quiz[0].options}
      question={quiz[0].question}
      />
    </div>

  );
}

export default App;

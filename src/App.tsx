import React, { useEffect  } from 'react';
import './App.css';
import {getQuizDetails} from "./services/quiz_service";
function App() {
  
useEffect(()=> {
  async function fetchData(){
    const questions = await getQuizDetails(10, 'easy');
  
console.log(questions);
  }
  fetchData();
}, []);



  return (
    <div className="App">
      
    </div>

  );
}

export default App;

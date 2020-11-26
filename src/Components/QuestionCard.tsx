
import React from "react";
import {questionPropsType} from "./../Types/quiz_types"



const QuestionCard:React.FC<questionPropsType> = ({question, options,}) =>{
    console.log(question, options)
    return(
        <div className="question-container">
            <h1>Hello</h1>

        </div>
    )
}

export default QuestionCard;
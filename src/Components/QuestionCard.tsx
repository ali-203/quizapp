import { type } from "os";
import React from "react";
type questionPropsType = {
    question: string
    options: string[]
} 




const QuestionCard:React.FC<questionPropsType> = ({question, options,}) =>{
    console.log(question, options)
    return(
        <div className="question-container">
            <h1>Hello</h1>

        </div>
    )
}

export default QuestionCard;
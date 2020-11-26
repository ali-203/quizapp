
import { Quiz, } from  "./../Types/quiz_types"; 

export const getQuizDetails = async(totalQuetions: number, level: string): Promise<Quiz[]> => {
const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuetions}&difficulty=${level}&type=multiple`)

let {results } =  await res.json();

const quiz = results.map ((questionObj: Quiz, ind: number) => {
return {
question: questionObj.question,
answer: questionObj.correct_answer,
Option: questionObj.incorrect_answers.concat(questionObj.correct_answer)

}
}
)
return quiz;
}
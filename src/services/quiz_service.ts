
import { Quiz,QuestionType } from  "./../Types/quiz_types"; 
const shuffleArray = (array: any[]) =>

[...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async(totalQuetions: number, level: string): Promise<QuestionType[]> => {
const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuetions}&difficulty=${level}&type=multiple`)

let { results } =  await res.json();

const quiz:QuestionType[] = results.map ((questionObj: Quiz) => {
return {
question: questionObj.question,
answer: questionObj.correct_answer,
Option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))

}
}
)
return quiz;
}
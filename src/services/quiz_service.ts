import { Quiz, QuestionType } from  "./../Types/quiz_types"; 

export const getQuizDetails = async(totalQuetions: number, level: string): Promise<Quiz[]> => {
const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuetions}&difficulty=${level}&type=multiple`)
let data:QuestionType[] =  await res.json();
const results = data.res
//return results;
}
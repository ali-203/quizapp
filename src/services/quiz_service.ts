import { Quiz, QuestionType } from  "./../Types/quiz_types"; 

export const getQuizDetails = async(totalQuetions: number, level: string): Promise<Quiz[]> => {
const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuetions}&difficulty=${level}&type=multiple`)

let {results } =  await res.json();

const quiz = results.map ((questionObj: Quiz, ind: number) => {
return {
    
}
}
)
//return results;
}
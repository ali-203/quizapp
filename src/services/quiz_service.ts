export const getQuizDetails = async(totalQuetions: number, level: string)=>{
const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuetions}&difficulty=${level}&type=multiple`)
let {results} = await res.json();
console.log(results)
}
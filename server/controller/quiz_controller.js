const Quiz = require('./quizModel');


module.exports = {
    saveQuiz(req,res){
        console.log('req.body',req.body)
        const quizProps =  req.body;
       Quiz.create(quizProps).then(quiz =>{
           console.log('quiz',quiz)
           res.send(quiz)})
    }
}
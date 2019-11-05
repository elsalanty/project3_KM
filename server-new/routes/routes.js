const QuizController = require('../controller/quiz_controller');
module.exports = (app)=>{
    app.post('/api/createUser',QuizController.createUser)
}
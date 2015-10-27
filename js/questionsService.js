angular.module('foodApp')
    .service('questionsService', function(){
    
    this.questions = [
        {
           prompt: "Spicy?",
           spicyRating: 5
        },
        {
           prompt: "low calorie",
           calories: 400
        }
    ]
    
})
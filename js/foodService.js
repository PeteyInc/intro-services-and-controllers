//foodService.js
angular.module('foodApp')
    .service('foodService', function(otherService){
    
    var myPrivateVar = "Hehe, this is a secret";
    
    this.somethingRandom = otherService.random;
    
    this.listOfFoods = [
            {
                name: 'Cheeseburgers',
                origin: 'American',
                calories: 480,
                spicyRating: 2
            },
            {
                name: 'Sushi',
                origin: 'Japan',
                calories: 400,
                spicyRating: 3
            },
            {
                name: 'Dorito Burritos',
                origin: 'American',
                calories: 2400,
                spicyRating: 5
            },
            {
                name: 'Chicken Marsala',
                origin: 'Italian',
                calories: 900,
                spicyRating: 2
            }
        ];
    
})
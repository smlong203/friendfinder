//Requirements
var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/friends', function (req, res) {
        var match = {
            name: "",
            photo: "",
            friendDifference: 5
        };

        var userData = req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var totalDifference = 0;

        //For loops
        //Source: Code below is combined work with colleagues/classmates 
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            for (var j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.scores = friends[i].scores;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // Push method to save data to database 
        friends.push(userData);

        //Res.json method will return data with user's match
        res.json(bestMatch);
    });
};
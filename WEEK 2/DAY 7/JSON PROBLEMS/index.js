var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [{
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}
cat["height"] = 12 //Add height and weight to Fluffy
cat["weight"] = 6 //Add height and weight to Fluffy
cat["name"] = "Fluffyy" //Fluffy name is spelled wrongly. Update it to Fluffyy
var frnd1 = cat.catFriends[0]
var frnd2 = cat.catFriends[1]
var act1 = frnd1.activities
var act2 = frnd2.activities
console.log(cat.activities) //Activity of fluffyy
console.log(act1) //List all the activities of Fluffyy’s catFriends.
console.log(act2) //List all the activities of Fluffyy’s catFriends.
console.log(frnd1.name) //Print the catFriends names
console.log(frnd2.name) //Print the catFriends names
act1[2] = "play" //Add 2 more activities to bar & foo cats
act1[3] = "sleep" //Add 2 more activities to bar & foo cats
act2[2] = "play" //Add 2 more activities to bar & foo cats
act2[3] = "eat" //Add 2 more activities to bar & foo cats
frnd1["furcolor"] = "Brown" //Update the fur color of bar
console.log(cat)

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [{
            date: '3/15/2019',
            damage_points: '5000',
            atFaultForAccident: true
        },
        {
            date: '7/4/2022',
            damage_points: '2200',
            atFaultForAccident: true
        },
        {
            date: '6/22/2021',
            damage_points: '7900',
            atFaultForAccident: true
        }
    ]
}
myCar.accidents.forEach(data => data.atFaultForAccident = false);
console.log(myCar);
var x = myCar.accidents
for (i=0;i<x.length;i++)
{console.log(x[i].date)}


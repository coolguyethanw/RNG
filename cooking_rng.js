var cooking = [
"Steamed",
"Fried",
"Stir fry",
"Deep fried",
"Smoked",
"baked",
"diced"
]
var type = [
"spaget",
"seafood",
"steak",
"curry",
"handburger",
"rice",
"chicken",
"bread",
"pork",
"beef",
"cake",
"c weed",
"flashdrives",
"AMD Ryzen 3 1300",
"Nvidia GTX 1060 6gb",
"apples",
"Intel Core i3 7100",
"Turkey"

]
// make computer choose a food
var randOne = Math.floor(Math.random()* cooking.length);
var randTwo = Math.floor(Math.random()*type.length);
window.alert(cooking[randOne] + " " + type[randTwo]);

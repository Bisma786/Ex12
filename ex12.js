// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Names = ["Lubna", "Uzma", "Saba", "Azra"];
for (var _i = 0, Names_1 = Names; _i < Names_1.length; _i++) {
    var Name = Names_1[_i];
    console.log("Hey! ".concat(Name, ", I hope my message finds you well"));
}

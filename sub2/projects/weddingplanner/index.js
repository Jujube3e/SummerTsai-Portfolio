var guests = prompt("How many guests do you have?");
var tables = prompt("How many tables do you want?");

var guestsPerTable = Math.floor(guests / tables);
var remainingGuests = guests % tables;

var setTables = tables - remainingGuests;
var extraTables = remainingGuests;

function weddingPlanner() {
  var output = "";

  if (remainingGuests === 0) {
    output =
      "Your " +
      guests +
      " guests will be seated as follows: " +
      setTables +
      " tables of " +
      guestsPerTable +
      " people.";
  } else if (remainingGuests !== 0) {
    output =
      "Your " +
      guests +
      " guests will be seated as follows: " +
      setTables +
      " tables of " +
      guestsPerTable +
      " people, and " +
      extraTables +
      " tables of " +
      (guestsPerTable + 1) +
      " people.";
  }

  document.write('<div class="result">' + output + "</div>");
}

weddingPlanner();













//it doesnt work :(
// var picImage = new Image();
// var pic;

// function randoPic(){

//   pic = Math.floor(Math.random() * 5) + 1;
//     picImage = document.querySelectorAll("img")[0];
//     picName = "images/pic" + pic + ".png";
//     picImage.setAttribute("src", picName);

// }

// randoPic();

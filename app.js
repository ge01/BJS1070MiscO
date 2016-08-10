//Accessing Objects Properties with the Dot Operator
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
console.log(hatValue);

//Using Objects for Lookups
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot":"Frank"
  };

  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));

//Testing Objects for Properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }else {
    return "Not Found";
  }
}

console.log(checkObj("gift"));

//Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Lev 1_2

let numArray =[];

for( let i = 0; i <= 10; i++){
    console.log(i);
}

//Lev 1_1

for( i = 1; i <= 10; i++){
    console.log("hello World"+ i);
}

//Lev 1_4

let names =["Freddy", "Steffen", "Finn", "Julia", "Farid", "Christian", "Sergio"];

for(i = 1; i < names.length; i++){
    console.log(names[i]);
}

//Lev 2_1

function imageArray() {
  var returnArray = [];

  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      returnArray.push("image_00" + i + ".jpg");
    } else if (i < 100) {
      returnArray.push("image_0" + i + ".jpg");
    } else {
      returnArray.push("image_" + i + ".jpg");
    }
  }

  for (let j = 0; j < returnArray.length; j++) {
    console.log(returnArray[j]);
  }
}

imageArray();


//Lev 2_2 + Lev 3_3

function generateLoop() {
    let userInput = document.querySelector("#loop-input").value;
    let loopCount = Number(userInput);
  
    if (isNaN(loopCount)) {
        document.querySelector("#loop-output").innerHTML = "Bitte gib eine gültige Zahl ein.";
      return;
    }
  
    let loopWord = "L";
    if (loopCount === 0) {
        document.querySelector("#loop-output").innerHTML = "ERROR";
      return;
    } else if (loopCount % 2 === 0) {
      for (let i = 0; i < loopCount; i++) {
        loopWord += "o";
      }
    } else {
      for (let i = 0; i < Math.floor(loopCount / 2); i++) {
        loopWord += "o0";
      }
      loopWord += "o";
    }
    loopWord += "p";
  
    document.querySelector("#loop-output").innerHTML = loopWord;
  }

//Lev 3_2

let numArr = [5, 22, 15, 100, 55]

let result = [];

for (let i = 0; i < numArr.length; i++) {
  let num = numArr[i];
  let divisors = [];

  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      divisors.push(j);
    }
  }

  result.push({ number: num, divisors: divisors });
}

let resultElement = document.querySelector(".result");
for (let s = 0; s < result.length; s++) {
  let entry = result[s];
  resultElement.innerHTML += "Die Zahl " + entry.number + " ist durch folgende Zahlen teilbar: " + entry.divisors.join(", ") + "<br>";
}





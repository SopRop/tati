let lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '?', '!', '&', '@', '#'];
let masterDiv = document.getElementById("master");

function getInput() {
    master.innerHTML = "";
    let valueInput = document.getElementById("word").value;
    let arrayInput = [...valueInput];
    let arrayOfArray = [];

    for (let char of arrayInput) {
      array = loopChar(char);
      arrayOfArray.push(array);
    }

    let idArray = 1;

    for (let array of arrayOfArray) {

      console.log('array', array);
      var p = [];
      // p[idArray] = array[index];
      // console.log('test :', p[idArray]);


      let p1 = document.createElement('p');
      p1.setAttribute("id", `${idArray}`);
      masterDiv.appendChild(p1);
      
      // idArray++;

      var num = array.length;
      var index = 0;
      // console.log('length :', array.length);

      let z = setInterval(function() {
        // console.log('index :', index);
        console.log('array[index] :', array[index]);
        p[idArray] = array[index];
        console.log('test :', p[idArray]);

        // document.getElementById('master').innerHTML = 'mf';
        // document.getElementById(`${idArray}`).innerHTML = array[index];

        p1.innerHTML = array[index];
        index++;
          if (index === num) {
            clearInterval(z);
          }
        }, 1000);

      idArray++;
    }
}

function loopChar(char) {

  let randNumber = Math.floor(Math.random() * 5) + 3;
  let newArray = [];
  var i = 1;

  while (i < randNumber) {
    let randLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    newArray.push(randLetter);
    i++;
  }
  newArray.push(char.toUpperCase());
  return newArray;
}
  
let masterDiv = document.getElementById("master");
let lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '?', '!', '&', '@', '#'];
let p = document.createElement('p');

function getInput() {
    master.innerHTML = "";
    let valueInput = document.getElementById("word").value;
    let arrayInput = [...valueInput];

    for (let char in arrayInput) {
        let singleLetter = document.createElement('div');
        singleLetter.id = arrayInput[char];
        singleLetter.className = "letter";
        singleLetter.innerHTML = (arrayInput[char]).toUpperCase();

        // let randNumber = Math.floor(Math.random() * 6) + 4;

        // let p = document.createElement('p');

        // for (i = 1; i < randNumber; i++) {
        //     let randLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
        //     setTimeout(function() {
        //         // p.innerHTML = randLetter;
        //         // masterDiv.appendChild(p);
        //         // console.log('i', i);
        //         // masterDiv.appendChild(randLetter);
        //         console.log('randLetter :', randLetter);
        //     }, 1000);
        //   }

        // console.log('number :', randNumber);


        // console.log('rand :', randLetter);

        replace();

        masterDiv.appendChild(singleLetter);

        // masterDiv.appendChild(singleLetter);


    }
    // console.log('number :', number);
}

function replace() {
    let randNumber = Math.floor(Math.random() * 6) + 4;
    var i = 1;

    while (i < randNumber) {
      (function(i) {
        setTimeout(function() {
            let randLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
            console.log('randLetter :', randLetter);
            p.innerHTML = randLetter;
            masterDiv.appendChild(p);
        }, 200 * i)
      }) (i++)
    }
};
  
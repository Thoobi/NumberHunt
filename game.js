
const audio1 = new Audio();
audio1.src="win.wav";

const audio2 = new Audio;
audio2.src = 'sweep.wav';


const storeArray = [];
let secretVal = [];

    let computerNum1 = Math.floor(Math.random() * 10);
    let computerNum2 = Math.floor(Math.random() * 10);
    let computerNum3 = Math.floor(Math.random() * 10);
    let computerNum4 = Math.floor(Math.random() * 10);

    //aray that stores the computer scret code
    secretVal.push(computerNum1);
    secretVal.push(computerNum2);
    secretVal.push(computerNum3);
    secretVal.push(computerNum4);
    console.log(secretVal);
    
    
    function compareIndexes() {
    
    let userVal = [];
    let userFirst = parseInt(document.getElementById("one").value);
    let userSecond = parseInt(document.getElementById("two").value);
    let userThird = parseInt(document.getElementById("tree").value);
    let userFourth = parseInt(document.getElementById("four").value);

    userVal.push(userFirst);	
    userVal.push(userSecond);
    userVal.push(userThird);
    userVal.push(userFourth);
    console.log(userVal);
    
    // Ensure arrays have the same length
    if (secretVal.length !== userVal.length) {
        console.log("Numbers must be 4");
        
    }
    let pots = 0; // Count of correct elements in the same position
    let pan = []; // Store indexes of correct elements in different positions
    // Iterate through indexes of arrays
    for (let i = 0; i < userVal.length; i++) {
        if (userVal[i] === secretVal[i]) {
            pots++; // Increment count of correct elements in the same position
        } 
        else 
        {
            // Check if the number exists in secretVal but in a different position
            if (secretVal.includes(userVal[i])) {
                pan.push(i); // Store index of correct element in different position
            }
            else
            {
                //  `Number ${userVal[i]} is not among the hidden value.`;
                const tableOr = document.getElementById('table').getElementsByTagName('tbody')[0];

                while (tableOr.firstChild) {
                    tableOr.removeChild(tableOr.firstChild);
                }
                
                // Insert new row
                const newRow = tableOr.insertRow();
                const newCell = newRow.insertCell();

                
                if(isNaN(userVal[i]))
                {
                    let newText = document.createTextNode(`Please enter your guess`);
                    newCell.appendChild(newText);
                }
                else
                {
                    if (secretVal.includes(userVal[i])) {
                        let newText = document.createTextNode(`Number ${userVal[i]} exists but in a different position.`);
                        newCell.appendChild(newText);
                    } 
                    else 
                    {
                        let newText = document.createTextNode(`Number ${userVal[i]} is not among the hidden value.`);
                        newCell.appendChild(newText);
                    }
                }
            }
        }
    }

    if (pots === secretVal.length) {

        console.log(`Pots: ${pots}     
        Pans: 0`)
        const message = `Pots: ${pots} \t\t\t Pans: 0`;
        document.getElementById('demo').innerHTML = message;
        document.getElementById('demol').innerHTML = `Congratulations You guessed 
        all correctly! 🎊🎉🎉`;

        var duration = 10 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);// All elements correct and in the same position
        
        audio1.play();
    } 

    else if (pan.length > 0) {

        if (document.readyState === "complete") {
            if(pan.length == 1)
            {
                const message1 = `Pots: ${pots}  
                Pans: ${pan.length}`;
                document.getElementById('demo').innerHTML = message1;
                document.getElementById('demol').innerHTML = `Getting closer :)`;
                audio2.play();
            }
            else if(pan.length == 2)
            {
                const message1 = `Pots: ${pots}  
                Pans: ${pan.length}`;
                document.getElementById('demo').innerHTML = message1;
                document.getElementById('demol').innerHTML = `No reward in giving up :)`;
                audio2.play();
            }
            else if(pan.length === 3)
            {
                const message1 = `Pots: ${pots}  
                Pans: ${pan.length}`;
                document.getElementById('demo').innerHTML = message1;
                document.getElementById('demol').innerHTML = `You are amazing! :)`;
                audio2.play();
            }
        }
    } 
    else if(pan.length === 0 && pots === 4)
    {
        document.getElementById('demo3').innerHTML = `congratulations`;
    }
    else {

        const message2 = `Pots: 0  
        Pans: 0`;
        document.getElementById('demo').innerHTML = message2;
        if (document.readyState === "complete") {
            audio2.play();
        }
        // document.getElementById('demo3').innerHTML = "";
        
    }
    
}

compareIndexes();

let audio5 = new Audio();
audio5.src ="hard.wav";

const restartGame = () =>
{
    if (document.readyState === "complete") {

        const audio4 = new Audio();
        audio4.src ="hard.wav";
        audio4.play();

        // Reload the page after a short delay to allow the audio to start playing
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}
restartGame()

const exitGame = () =>
{

    if (document.readyState === "complete") {
        
        audio5.play();

        const userInput = prompt('Are you sure you want to exit game? Y/N');
        if(userInput.toLowerCase() == 'y')
        {
            setTimeout(() =>
            {
                window.open('index.html', name = self);
            }, 1000);
        }
        else
        {
            console.log("lol");
        }
        
        // audio5.play();
    }
}
exitGame()














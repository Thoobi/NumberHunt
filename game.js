setInterval(() => {
    const just = new Date();
    document.getElementById('share').innerHTML = `${just.toLocaleTimeString()}`;
}, 1000);

let score = 0;

const audio1 = new Audio;
audio1.src = 'win.wav';

const audio2 = new Audio;
audio2.src = 'sweep.wav';

let newStoreArray;
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
// console.log(secretVal);


function compareIndexes() 
{
    let userVal = [];
    let userFirst = parseInt(document.getElementById("one").value);
    let userSecond = parseInt(document.getElementById("two").value);
    let userThird = parseInt(document.getElementById("tree").value);
    let userFourth = parseInt(document.getElementById("four").value);

    userVal.push(userFirst);	
    userVal.push(userSecond);
    userVal.push(userThird);
    userVal.push(userFourth);
    // console.log(userVal);
    
    // Count of correct elements in the same position
    let pots = 0;

    // Store indexes of correct elements in different positions
    let panDigit ="";
    let pan = [];
    
    // Iterate through indexes of arrays
    for (let i = 0; i < userVal.length; i++) 
    {
        if (userVal[i] === secretVal[i]) 
        {
            pots++;
        } 
        else 
        {
            // Check if the number exists in secretVal but in a different position
            if (userVal.includes(secretVal[i])) {
                panDigit++;
                pan.push(panDigit);
                // console.log(pan.length);
            }
        }
    }

    if (pots === 4) 
    {
        audio1.play();
        score += 1;
        document.getElementById('demo').innerHTML =  `Score: ${score}`;
        const message = `Pots: ${pots} Pans: 0`;
        document.getElementById('potIt').innerHTML = `Pot: ${pots}`;
        document.getElementById('panIt').innerHTML = `Pan: ${pan.length}`;
        document.getElementById('message').innerHTML = `Congratulations you won 🎊🎉🎉`;

        var duration = 10 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = 
        {
            startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 
        };
        function randomInRange(min, max) 
        {
            return Math.random() * (max - min) + min;
        }
        var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) 
        {
            return clearInterval(interval);
        }
        var particleCount = 100 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.05, 0.4), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 200);// All elements correct and in the same position
        
        
        const playLow = () =>
        {
            let audio6 = new Audio();
            audio6.src ="hard.wav";
            audio6.play();
            document.getElementById('one').value= "";
            document.getElementById('two').value = "";
            document.getElementById('tree').value = "";
            document.getElementById('four').value = "";
            document.getElementById('potIt').innerHTML = ``;
            document.getElementById('panIt').innerHTML = ``;
            document.getElementById('message').innerHTML = `Enter your guess again`;  

            secretVal = [];
            let computerNum1 = Math.floor(Math.random() * 10);
            let computerNum2 = Math.floor(Math.random() * 10);
            let computerNum3 = Math.floor(Math.random() * 10);
            let computerNum4 = Math.floor(Math.random() * 10);

            //aray that stores the computer scret code
            secretVal.push(computerNum1);
            secretVal.push(computerNum2);
            secretVal.push(computerNum3);
            secretVal.push(computerNum4);
            // console.log(secretVal);
        }
        const playLowButton = document.getElementById('playLowButton');
        playLowButton.addEventListener('click', playLow);
    } 
    else 
    {
        document.getElementById('potIt').innerHTML = `Pot: ${pots}`;
        document.getElementById('panIt').innerHTML = `Pan: ${pan.length}`;
    }
}
compareIndexes();

const resetGame = () =>
{
    if (document.readyState === "complete") 
    {
        let audio6 = new Audio();
        audio6.src ="hard.wav";
        audio6.play();
        document.getElementById('one').value= "";
        document.getElementById('two').value = "";
        document.getElementById('tree').value = "";
        document.getElementById('four').value = "";
        document.getElementById('potIt').innerHTML = ``;
        document.getElementById('panIt').innerHTML = ``;
        document.getElementById('message').innerHTML = ``;
        document.getElementById('demo').innerHTML =  `Score: ${score}`;
        score = 0;

        secretVal = [];
        let computerNum1 = Math.floor(Math.random() * 10);
        let computerNum2 = Math.floor(Math.random() * 10);
        let computerNum3 = Math.floor(Math.random() * 10);
        let computerNum4 = Math.floor(Math.random() * 10);
        //aray that stores the computer scret code
        secretVal.push(computerNum1);
        secretVal.push(computerNum2);
        secretVal.push(computerNum3);
        secretVal.push(computerNum4);
        // console.log(secretVal);
        // scoreOutput = `Score: ${score}`;
        // console.log(scoreOutput);
        // console.log("true");
    }
}
resetGame()

const exitGame = () =>
{
    if (document.readyState === "complete") {
        let audio5 = new Audio();
        audio5.src ="hard.wav"; 
        audio5.play();

        const userInput = prompt('Are you sure you want to exit game? Y/N');
        if(userInput.toLowerCase() == 'y')
        {
            setTimeout(() =>
            {
                window.open('index.html', name = self);
            }, 1000);
        }
    }
}
exitGame()

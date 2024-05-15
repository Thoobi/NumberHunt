
function reload() {
    const audio = new Audio();
    audio.src="hard.wav";
    audio.play();
    setTimeout(()=>{
    window.open('game.html', name = self);
    }, 600);
}

const audio2 = new Audio();
audio2.src="start.wav";
const audio3 = new Audio();
audio3.src="sweep.wav";

const jump = () =>
{
    const switch1 = document.getElementById("ham");
    const switch2 = document.getElementById('main');
    const navIt = document.getElementById("navIt");
    const footIt = document.getElementById("footIt");


    switch1.addEventListener("click", ()=>{

        if(switch1.classList.toggle("change"))
        {
            navIt.style.display = "block";
            switch2.style.display = "none";
            footIt.style.display = "none";
            audio2.play();
            console.log("true");
        }
        else 
        {
            if(document.readyState === "complete")
            {
                audio3.play();  
                    navIt.style.display = "none";
                    switch2.style.display = "block";
                    footIt.style.display = "block";
                    audio2.pause();
                    audio2.currentTime = 0;
            }
        }
    })
}

jump()




// Get the current year copyright
const currentYear = new Date().getFullYear();

// Set the content of the element with id "copyright"
const copyrightElement1 = document.getElementById("copyright");
const copyrightElement2 = document.getElementById("copytune");
copyrightElement1.innerHTML = `&copy; Ojo Daniel ${currentYear}`;
copyrightElement2.innerHTML = `&copy; Ojo Daniel ${currentYear}`;

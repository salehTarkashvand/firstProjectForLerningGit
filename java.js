const  elContainer = document.getElementById('conatiner');
const text = document.getElementById('text');
const elPointer = document.querySelector('.pointer')

const totaltime = 7500;
const breatetime = (totaltime/5)*2;
const holdtime = totaltime/5;


const breatheanimation = () => {
    text.innerText=('breathe in!');
    elContainer.classList.remove('shrink');
    elContainer.classList.add('grow');
    elPointer.classList.remove('shrink')

    elPointer.classList.add('grow')

    setTimeout (()=>{
     
        setTimeout(() => {
            text.innerText='breathe out!'; 
            elContainer.classList.remove('grow');
            elContainer.classList.add('shrink');
            elPointer.classList.add('shrink');

        },holdtime);
        text.innerText='hold!'; 
        elPointer.classList.remove('grow')

    }, breatetime);
}
breatheanimation();
setInterval(breatheanimation,totaltime);
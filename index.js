let count=0;
let interval;

const countlabel=document.getElementById("countlabel");
const increasebtn=document.getElementById('increasebtn');
const decreasebtn=document.getElementById("decreasebtn");
const reset=document.getElementById("reset");

function updatedisplay(){
    countlabel.innerHTML= count;
}
updatedisplay();

function startcounting(changefn){
    changefn()
    interval=setInterval(changefn, 100);

}

function stopcounting(){
    clearInterval(interval);
}

function buttonHoldUpdate(button, changefn){
    button.addEventListener ('mousedown', () => startcounting(changefn));
    button.addEventlistner ('mouseup', stopcounting);
    button.addEventlistner ("mouseleave", stopcounting);
    

    button.addEventlistner ('touchstart',(e) =>{
        e.prevetdefault();
        startcounting(changefn);
    })

    button.addEventlistner("touchend" ,stopcounting);
    }
    

    buttonHoldUpdate(increasebtn, () => {
    count++;
    updatedisplay();
    })

    buttonHoldUpdate(decreasebtn,() =>{
        if(count > 0){
            count--;
        }
        updatedisplay();
    })

    reset.addEventListener('click', () =>{
        count=0;
        updatedisplay();
    })


    

    


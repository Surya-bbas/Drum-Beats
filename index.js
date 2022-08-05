//listen for click
let arr = document.querySelectorAll("button");
for (button of arr){
    button.addEventListener("click",function (){
        console.log(this.innerHTML);        
        key = this.innerHTML;
        audioPlayer(key);
        buttonAnimation(key)
       
    });

}

//listen for keyboard
document.addEventListener("keydown",function(obj){
    console.log(obj.key);
    key=obj.key
    audioPlayer(key);
    buttonAnimation(key);
})

//audioplayer function
function audioPlayer(audioDecider) {

    switch (audioDecider) {
        case "w":
            let audioW= new Audio('sounds/tom-3.mp3');
            audioW.play();
            break;
        case "a":
            let audioA= new Audio('sounds/tom-4.mp3');
            audioA.play();
            break;
        case 's':
            let audioS= new Audio('sounds/tom-1.mp3');
            audioS.play();
            break;
        case 'd':
            let audioD= new Audio('sounds/tom-2.mp3');
            audioD.play();
            break;
        case "j":
            let audioJ=new Audio('sounds/crash.mp3')
            audioJ.play();
            break;
        case "k":
            let audioK=new Audio('sounds/snare.mp3')
            audioK.play();
            break;
        case 'l':
            let audioL=new Audio('sounds/kick-bass.mp3')
            audioL.play();
            break;

    
        default:
            break;
    }     
        
}

function buttonAnimation(key) {
    document.querySelector(`.${key}`).classList.add("pressed");

    setTimeout(function(){
        document.querySelector(`.${key}`).classList.remove("pressed")
    },100)
    
}
     
function toggleRuleBox() {
    const ruleBox = document.getElementById("ruleBox");
    ruleBox.style.display = ruleBox.style.display === "none" || ruleBox.style.display === "" ? "block" : "none";
}


function closeRuleBox() {
    const ruleBox = document.getElementById("ruleBox");
    ruleBox.style.display = "none";
}
let myself = document.querySelector(".your-pick");
let pc = document.querySelector(".computer-pick");
let rule = document.querySelector(".rule-button");
let me =  document.querySelectorAll(".me");
let com = document.querySelectorAll(".comp");
let tie = document.querySelector(".tie-con");
let win = document.querySelector(".win-con");
let lost = document.querySelector(".lost-con");
let line = document.querySelectorAll('.line');
let next = document.querySelector(".next");
let play = document.querySelector(".play");
let play2 = document.querySelector(".play2");
let play3 = document.querySelector(".play3");
let play4 = document.querySelector(".reset");
let circle = document.querySelector(".circleanimation");
const myscore = document.querySelector(".your-score");
const comscore = document.querySelector(".computer-score");
let score1 = localStorage.getItem("your-score");
let score2 = localStorage.getItem("computer-score");
if (score1 === null) {
  score1 = 0;
  localStorage.setItem("your-score", score1);
} else {
  score1 = parseInt(score1, 10);
}
myscore.textContent = score1;


function updateScore(points) {
  score1 += points; 
  localStorage.setItem("your-score", score1); 
  myscore.textContent = score1; 

}
if (score2 === null) {
    score2 = 0;
    localStorage.setItem("computer-score", score2);
  } else {
    score2 = parseInt(score2, 10);
  }
  comscore.textContent = score2;
  
  
  function updateScore1(pointss) {
    score2 += pointss; 
    localStorage.setItem("computer-score", score2); 
    comscore.textContent = score2; 
  }

let ran = Math.floor(Math.random()*3);
me.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        myself.style.opacity=1;
        pc.style.opacity=1;
        line.forEach( item =>{
            item.style.display="none";
        });
    
        me.forEach( item =>{
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show");
        
        setTimeout(() =>{
           com[ran].style.display="block";
           com[ran].classList.add("right");

        },100);
        setTimeout(()=>{
            if(index==0 && ran==1 || index==1 && ran==2 || index==2 && ran==0 ){
               win.style.display="flex";
               circle.style.display="flex";
               rule.style.display="block";
               rule.classList.add("nextafter");
               next.style.display="grid";
               updateScore(1);
            }
            else if(index==0 && ran==0|| index==1 && ran==1 || index==2 && ran==2){
                tie.style.display="flex";
            }
            else{
                lost.style.display="flex";
                circle.style.display="flex";
                circle.classList.add("rightcircle");
                updateScore1(1);

            }
        },200)

    })
    
});

play3.addEventListener("click", ()=>{
    window.location.reload();
    })
play2.addEventListener("click", ()=>{
window.location.reload();
    })
play.addEventListener("click", ()=>{
    window.location.reload();
    })

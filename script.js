const answer = input.value;
const scoreE = document.getElementById('score');
const no1 = document.getElementById('no1');
const no2 = document.getElementById('no2');

let score=JSON.parse( localStorage.getItem("score"));
(!score)? score=0:
console.log(score);
scoreE.innerText="score : "+ score;
const number1 =no1.innerText=Math.ceil(Math.random()*10)
const number2 =no2.innerHTML=Math.ceil(Math.random()*10)

const ans = number1 * number2 ;
console.log(ans)

function onSubmit(){
    const answer = input.value;
    if (answer==ans) {
        score= score+1;
        scoreE.innerText="score : "+ score;
        saveLocalStorage()
    }
    
    else {alert("answer incorrect")
    score= score-1;
    scoreE.innerText="score : "+ score;
    saveLocalStorage()}

    console.log(answer)
}

function saveLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}




console.log(answer);
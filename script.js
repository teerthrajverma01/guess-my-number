'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value=12;
console.log(document.querySelector('.guess').value);
*/

// lets define secret no ranging from 1 to 10;
let secretno = Math.trunc(Math.random() * 10) + 1;
console.log(`secret no is ${secretno}`);

let score = 5;
document.querySelector('.score').textContent=score;

let highscore =0;

document.querySelector('.check').addEventListener('click',function(){
    const userval =Number(document.querySelector('.guess').value);
    console.log(`guessed no is ${userval}`);

    
    if(score !=0){
        if(!userval){
            document.querySelector('.message').textContent="NO number entered";
        }
        else {
            if(userval ===secretno){
                document.querySelector('.message').textContent="Correct Number  ";
                document.querySelector('.number').textContent=secretno;
                document.querySelector('body').style.backgroundColor='#60b347';
                
                if(score > highscore){
                    highscore=score;
                    document.querySelector('.highscore').textContent=highscore;
                }
            }
            else{  
                if(score >1){  
                    score--;
                    document.querySelector('.score').textContent=score;
                    if(userval > secretno){
                        document.querySelector('.message').textContent="Too High ";
                    }
                    else{
                        document.querySelector('.message').textContent="Too Low ";     
                    }
                }
                else{
                    score--;
                    document.querySelector('.score').textContent=score;
                    document.querySelector('.number').textContent=secretno;
                    document.querySelector('.message').textContent="You Lost ";
                }
            }
            
        }

    }
    

});

document.querySelector('.again').addEventListener('click',function(){
    
    secretno = Math.trunc(Math.random() * 10) + 1;
    console.log(`new secret no is ${secretno}`);
    

    score=5;
    document.querySelector('.score').textContent=score;
    
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';  

});
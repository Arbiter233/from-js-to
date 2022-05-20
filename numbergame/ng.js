let guess
let btn = document.getElementById("button")
let answer = Math.floor(Math.random()*100)+1
let chance = 10

btn.addEventListener('click', check)
function check() {	
  guess = document.getElementById("guess").value
  
  if (chance ==0){
		console.log('you lose!')
    reset()
  }
  if (0<guess<101) {
    console.log('checking '+guess+'!')
  	
  	if (guess ==answer){
  		console.log('you win!')
      reset()
  	} else if (guess<answer){
  		console.log('try higher!')
  	} else if (guess>answer){
      console.log('try lower!')
    }
  	chance -=1
  } else {
    console.log('invalid input!')
  }
  //document.getElementById("button") = ""
}
function reset() {
  answer = Math.floor(Math.random()*100)+1
  chance = 10
}

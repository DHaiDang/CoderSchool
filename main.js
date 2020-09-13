let goal = Math.floor(Math.random()*30)
console.log(goal)
let yourGuess = []
let turn = 10

let mess = document.getElementById("message")
document.getElementById("guessButton")
  .addEventListener("click", Guess)
function Guess(){
  let value = document.getElementById("number").value
  if(goal < value) {
    turn--
    mess.innerHTML = `<h3 style="color:red;">Too High. You have ${turn} turn left</h3>`
    yourGuess.push(value)
  }
  else if(value < goal) {
    turn--
    mess.innerHTML = `<h3 style="color:red;">Too Low. You have ${turn} turn left</h3>`
    yourGuess.push(value)
  }
  else {
    mess.innerHTML = `<h3 style="color:green;">Congrate</h3>`
    document.getElementById("pass").innerHTML = `<p>Your misstake: ${yourGuess}</p>`
    let count =5 
    setInterval(()=>{ 
      document.getElementById("time").innerHTML = `<p>Reset in ${count}s</p>`
      count--
      if(count == -1) {
        location.reload()
      }
    }, 1000);
  }
  if(turn == 0) {
    let count2 = 5
    setInterval(()=>{ 
      document.getElementById("time").innerHTML = `<p>Reset in ${count2}s</p>`
      count2--
      if(count2 == -1) {
        location.reload()
      }
    }, 1000);
  }
}
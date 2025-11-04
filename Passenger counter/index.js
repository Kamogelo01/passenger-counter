let countEL = document.getElementById("count-el")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")
let count = 0

function decrement(){
  count -= 1
  countEL.innerText = count
}

function increment(){
  count += 1
  countEL.innerText = count
}

function save(){
  let savedNum = count + " - "
  saveEl.textContent +=  savedNum
  countEL.innerText = 0
  count = 0
  //console.log(count)
}
// DOM elements
const container = document.querySelector('.container');
const genBtn = document.getElementById('generate')
const bubbleSort = document.querySelector('.bubble-sort')
let barList;

let count = 0;
// array of fixed numbers which can be changed later based on the given input
function generateArr(){
  if(count ==1){
    container.innerHTML = '';
    count = 0;
  }

  for(let i = 0; i<10; i++){
    const bar = document.createElement('div')
    bar.classList.add('bar');
    
    let random = Math.floor(Math.random() * 100) + 1; 

    bar.setAttribute('data-no', random)
    bar.style.height = `${random * 3}px`;
    container.appendChild(bar);
  }
  barList = document.getElementsByClassName('bar')
  count++;
}



// all event listeners
genBtn.addEventListener('click',generateArr)

// bubble sort event listener
bubbleSort.addEventListener('click',() =>{
  if(barList.length !== 0) { 
    console.log(barList);
    bblSort(barList) 
    console.log(barList); 
  } else console.log("the array is empty");
})
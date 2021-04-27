function bblSort(arr){
     
  for(let i = 0; i < arr.length; i++){
      
    // Last i elements are already in place  
    for(let j = 0; j < ( arr.length - i -1 ); j++){
        
      // Checking if the item at present iteration 
      // is greater than the next iteration
      if(arr[j].getAttribute('data-no') > arr[j+1].getAttribute('data-no')){
          
        // If the condition is true then swap them
        swap(arr[j], arr[j+1])
      }
    }
  }
  // Print the sorted array
  return arr
}

function swap(node1, node2) {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;

  node1.replaceWith(node2)
  parent.insertBefore(node1, afterNode2)
}
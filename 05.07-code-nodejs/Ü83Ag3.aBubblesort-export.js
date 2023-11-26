function bubbleSort(list) {
    while (true) {
      let isSorted = true;
  
      for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]) {
          [list[i], list[i + 1]] = [list[i + 1], list[i]];
          isSorted = false;
        }
      }
  
      if (isSorted) {
        break;
      }
    }
  
    return list; // Return the sorted list
  }
  
  // Execute the bubbleSort function only if the module is executed directly
  if (require.main === module) {
    const list = [20, 100, 75, 999, 75, 0, 44];
    bubbleSort(list);
    console.log(list); // output sorted array
  }
  
  module.exports = bubbleSort;
  
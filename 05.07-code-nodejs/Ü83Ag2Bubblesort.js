function bubbleSort(list) {
    while (true) {
      let isSorted = true; // Assume the list is already sorted
  
      for (let i = 0; i < list.length - 1; i++) {
        // Is element at index i greater than element at index i + 1?
        if (list[i] > list[i + 1]) {
          // Swap the two elements
          [list[i], list[i + 1]] = [list[i + 1], list[i]];
          // The list is not sorted yet
          isSorted = false;
        }
      }
  
      // If the list is already sorted, break the loop
      if (isSorted) {
        break;
      }
    }
  }
  
  // Usage example:
  const list = [20, 100, 75, 999, 75, 0, 44];
  bubbleSort(list);
  console.log(list); // Output: list array
  
function waitForFive(callback) {
    setTimeout(() => {
      callback(5); // Calling the callback function with the value 5 after 5000ms
    }, 5000);
  }
  
  function handleResult(result) {
    console.log("Successful:", result);
  }
  
  waitForFive(handleResult);
  
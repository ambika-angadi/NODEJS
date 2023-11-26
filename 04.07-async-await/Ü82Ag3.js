function waitForFive() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(5); // Resolving the Promise with the value 5 after 5000ms
      }, 5000);
    });
  }
  
  async function asyncCaller() {
    try {
      const result = await waitForFive();
      console.log("Successful:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  asyncCaller();
  
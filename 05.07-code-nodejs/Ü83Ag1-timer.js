function timer() {
    let i = 2 * 60; // 2 minutes in seconds
    const intervalID = setInterval(() => {
      const minutes = Math.floor(i / 60);
      const seconds = i % 60;
  
      console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
  
      i--;
  
      if (i < 0) {
        clearInterval(intervalID);
        console.log('Countdown completed!');
      }
    }, 1000); // Set the interval to 1000ms (1 second)
  }
  
  timer();
  
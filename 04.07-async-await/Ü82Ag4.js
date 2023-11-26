function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  (async function() {
    console.log("Before sleep");
    await sleep(500); // Wait for 500ms
    console.log("After sleep");
  })();
  
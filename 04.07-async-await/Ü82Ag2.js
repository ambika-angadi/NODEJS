function waitForFive() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // Resolving the Promise with the value 5 after 5000ms
            resolve(5);
        }, 5000);
    });

    promise
        .then(result => {
            console.log("Successful:", result);
        })
        .catch(error => {
            console.error("Error:", error.message);
        });
}

waitForFive();

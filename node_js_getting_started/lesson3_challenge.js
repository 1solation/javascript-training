let counter = 0;
const intervalId = setInterval(() => {
    console.log('testy');
    counter +=1;
    
    if(counter === 5) {
        console.log('I have finished');
        clearInterval(intervalId);
    }
}, 1000)
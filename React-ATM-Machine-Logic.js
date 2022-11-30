const withdraw = (amount) => {
    console.log('Input '+ amount);
    let notes = [1000, 500, 100, 50, 20, 10];
    let noteCounter = Array(6).fill(0); // [0, 0, 0, 0, 0, 0]
    if (amount % 10 !== 0) {
        console.log("Output");
        console.log('Invalid Amount');
    } else {
        for (let i = 0; i < 6; i++) {
            if (amount >= notes[i]) {
                noteCounter[i] = Math.floor(amount / notes[i]); // Math.floor(2340 / 1000) --> 2
                amount = amount % notes[i]; // amount will be reduced to  2340 % 1000 --> 340 
            }
            //loop continous with new amount 340
            //340 is less than 500, so next iteration
            // Math.floor(340 / 100) --> 3
            //340 % 100-->40
        }

        console.log("Output");
        let total=0; 
        for (let i = 0; i < 6; i++) { // [2, 0, 3, 0, 2, 0]
            if (noteCounter[i] != 0) {
                console.log(noteCounter[i] + '*'+ notes[i]+ '=' + noteCounter[i]*notes[i] );
                total+=noteCounter[i]*notes[i];
            }
        }
        console.log('Total = '+ total);
    }
}



withdraw(2340);
withdraw(7878);
withdraw(5680);

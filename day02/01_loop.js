/*
- for loop
- while 
- do, while
*/


// iterate through known number of times !
// coach --> start running every day for 5 rounds !!
// round -> 1, 2, 3, 4, 5 !  start - end 
// on particular day, you are not well, coach says --> run only 2 rounds !!

let bHealthy = true;
for (let round = 1; round <= 5; round++) {
    if(!bHealthy && round > 2){
        break; // statement to come out of the for loop
    }
    //console.log(round);
}


// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10)
// finally, i need the sum !! 



// while loop
// end ?? it is based on condition
// real-time example: wait until element becomes visible ! 1 sec - 30 sec !
let bRaining = true;
while (!bRaining) {
    // console.log("Keep running");
}

// do - while loop
// run at least one round -- warm that day !!
let bPouring = true;
do {
    console.log("Keep Walking")
} while (!bPouring);
// do condition will execute at least once 

// collect table data and click next (only if it enabled)

/*
Classroom 1

int val = 10; // 1,2,3,4,...10
function for odd or even !!

print odd numbers between 1 to n // 1,3,5,7,9


Classroom 2

int val = 5;
funtion to sum all the values between 1 to n 
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, i need the sum !! 

*/
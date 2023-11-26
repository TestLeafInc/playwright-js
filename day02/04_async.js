let type;

function orderBriyani(){
    console.log("Type of briyani ordered ");
    // action -- kitchen -- 5 seconds 
    // sleep for 5 seconds
    setTimeout(() => {
        console.log("Briyani is getting prepared")
        type = "mushroom";
    }, 5000);
    console.log("Briyani delivered");
    return type;
}

const briyani = orderBriyani();
console.log("Eat the "+ briyani+" briyani");

// test automation project
// button click --> promise --> return you the new page or i will return error page
// do you need wait for the promise to complete? yes | no !
// take a snaphot?? 

// playwright when you are dealing aynchronous actions (like if it returns promise)
// wait for the promise to return either success or error !!
// how can I wait??
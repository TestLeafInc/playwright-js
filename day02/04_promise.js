// before running this code .. do the following
// npm install axios (from the project folder so that node modules)

import axios from 'axios';

function getDogBreedsWithOutAwait(){
    const response = axios.get("https://dog.ceo/api/breeds/list/all");
    console.log(response); // this line will get executed only when the response is resolved / error
    console.log("Take snapshot")
}

async function getDogBreedsWithAwait(){
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    console.log(response); // this line will get executed only when the response is resolved / error
    console.log("Take snapshot")
}

// Promise will be pending 
getDogBreedsWithOutAwait();
// Wait until promise returns before it can run
getDogBreedsWithAwait();
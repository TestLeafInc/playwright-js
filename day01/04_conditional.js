// if, if - else, switch - case


function getBrowserVersion(){

    if(browser === 'chrome'){
        return "120.23.9921";
    } else if (browser === 'firefox'){
        return "119.28.11";
    } else if (browser === 'edge'){
        return "120.18.17";
    } else{
        return "unsupported browser"
    }

}

let browser = "safari";
let version  = getBrowserVersionOptimized();
console.log(version)

function getBrowserVersionOptimized() {
    switch (browser) {
        case "chrome":
            return "120.23.9921"; 
        case "firefox":
            return "119.28.11";
        default:
            return "unsupported browser";
    }
}
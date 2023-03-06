//constants
const banner = q(".banner");

//query function

function q(query) {
    const res = document.querySelector(query);
    if(res == null) {
        console.log("Null Query");
    }
    return res;
}

function qAll(query) {
    const res = document.querySelectorAll(query);
    if(res == null) {
        console.log("Null Query");
    }
    return res;
}
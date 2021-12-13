function stringToHash(string) {

    let hash = 0;

    if (string.length == 0) return hash;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}

let gfg = "GeeksforGeeks"

document.getElementById("geek").innerHTML
    = stringToHash(gfg);


// function mySubmit(obj) {
//     var pwdObj = document.getElementById('password');
//     var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
//     hashObj.update(pwdObj.value);
//     var hash = hashObj.getHash("HEX");
//     pwdObj.value = hash;
//     console.log(pwdObj.value)
//
//     var pwdObj = document.getElementById('repass');
//     var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
//     hashObj.update(pwdObj.value);
//     var hash = hashObj.getHash("HEX");
//     pwdObj.value = hash;
//     console.log(pwdObj.value)
// }

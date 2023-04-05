


const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890./:''$#@-_="

function generatePass(){
    let password = ""
    document.querySelector('#range-val').textContent = document.querySelector('#range').value


    for(let i =0; i < document.querySelector('#range').value; i++){
        let random = characters[(Math.floor(Math.random() * characters.length))];
        password = password + random
        document.querySelector('.input').value = password;
    }

    return password
}




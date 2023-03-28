// let password = ""
// let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
// let gen = document.querySelector('#generate');
// let = document.querySelector('#btn');



// function generatePassword(){
//     for(i = 0; i<7; i++){
//         password = password + random.charAt(Math.floor(Math.random() * random.length));
//     }

//     return password
// }

// let store = generatePassword();

// function display(){
//     gen.textContent = store;
// }

// let box = document.querySelector('.box');
// let result = document.querySelector('.result');
// // let value = document.querySelector('#box').value

// store

// box.addEventListener('click', function(){
//     if( document.querySelector('#box').value === store){
//         result.textContent = "Password Valid"
//     }
//     else{
//         alert("Doesn't work");
//     }
// })

let password = ""
let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890./:''$#@-_="
let out = document.querySelector('.output');
let input = document.querySelector('.input');
// let range_val =
let btn = document.querySelector('btn');



function rand(value){
    return Math.floor(Math.random() * value)
}

function generatePassword(){
    // let range = 
    document.querySelector('#range-val').textContent = document.querySelector('#range').value
    // range.value = range_val.textContent;

    for(let i =0; i < document.querySelector('#range').value; i++){
        password += random.charAt(Math.floor(Math.random() * random.length));
    }
    // out.textContent = password;
    return input.value = password;
}

input.value = generatePassword()

// generatePassword();
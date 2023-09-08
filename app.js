const slider = document.querySelector('#slider')
const sliderOutput = document.querySelector('.slider')
const btn = document.querySelector('button')
const output = document.querySelector('#output')
const upper = document.querySelector('#upper')
const lower = document.querySelector('#lower')
const number = document.querySelector('#numbers')
const symbol = document.querySelector('#symbols')
const charLen = document.querySelector('.char-len')
const strengthBar = document.querySelectorAll('.strength')
const strengthStatus = document.querySelector('.strength-status')
const copyBtn = document.querySelector('.copy-btn')

const charset = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Strength Checker
//const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
//const mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
// does not meet the strong or medium level requirements

const passwordStrength = (passwordParam) => {
    strengthBar.forEach((bar)=>{
        let bar1 = document.querySelector('.strength-container :nth-child(4)')
        let bar2 = document.querySelector('.strength-container :nth-child(3)')
        let bar3 = document.querySelector('.strength-container :nth-child(2)')

        if(passwordParam > 14){
            strengthStatus.textContent = 'Strong'
            bar.style.backgroundColor = 'green'
        } else if(passwordParam >=8){
            strengthStatus.textContent = 'Medium'
            bar.style.backgroundColor = 'white'
            bar1.style.backgroundColor = 'orange'
            bar2.style.backgroundColor = 'orange'
            bar3.style.backgroundColor = 'orange'
        } else if(passwordParam < 8) {
            strengthStatus.textContent = 'Weak'
            bar.style.backgroundColor = 'white'
            bar1.style.backgroundColor = 'white'
            bar2.style.backgroundColor = 'red'
            bar3.style.backgroundColor = 'red'
        }
    })
    
}

slider.addEventListener('input', ()=>{
    charLen.textContent = slider.value
    passwordStrength(slider.value)
})

charLen.textContent = slider.value;

/*
// Uppercase
const uppercase = () =>{
    let onlyUpperPassword = ''
    for(let i = 0; i <=length; i++){
        //let randomNum = Math.floor(Math.random()*charset.length)
        onlyUpperPassword += (charset.match(/[A-Z]/g) || []).join()
    }
    output.textContent = onlyUpperPassword
}

// Lowercase
const lowercase = () => {
    onlyLowerPassword = (charset.match(/[a-z]/g) || []).join()
    output.textContent = onlyLowerPassword
}

// Numbers
const numbers = () => {
    onlyNumbersPassword = (charset.match(/[0-9]/g) || []).join()
    output.textContent = onlyNumbersPassword
}

// Symbols
const symbols = () => {
    onlySymbolsPassword = (charset.match(/[!-)]/g) || []).join()
    output.textContent = onlySymbolsPassword
}
*/

// Generate password
const generatePassword = () => {
    let password = ''
    let length = slider.value - 1
    copyBtn.textContent = ""

    for(let i = 0; i <=length; i++){
        let randomNum = Math.floor(Math.random()*charset.length)
        password += charset.substring(randomNum, randomNum+1)
    }
/*
    if(upper.checked){
        console.log('Uppercase checked')
        uppercase()
    } if(lower.checked){
        console.log('Lowercase checked')
        lowercase()
    } if(number.checked){
        console.log('Numbers checked')
        numbers()
    }if(symbol.checked){
        console.log('Symbols checked')
        symbols()
    } */
    
    console.log(password)
        output.textContent = password
        return password
}

btn.addEventListener('click', generatePassword)

// Copy to clipboard
setTimeout(copyBtn.addEventListener("click", function(){
    let text = output.textContent
    copyText(text)
    copyBtn.textContent = "Copied";
}), 500)

async function copyText(text){
    if(navigator.clipboard && window.isSecureContext){
        try{
            await navigator.clipboard.writeText(text);
            alert(`Copied "${text}" successfully`);
        } catch {
            alert("Copy failed: "+ err);
        }
    } 
   
};

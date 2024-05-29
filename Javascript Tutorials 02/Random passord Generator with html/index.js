// Rendom password Generator
const mySubmit = document.getElementById("mySubmit");
mySubmit.onclick = function(){

    const passwordLength = document.getElementById("myLength");
    let convertdPasswordLength =Number(passwordLength.value);
    const includeLowercase = document.getElementById("lowercaseLetters");
    let convertedIncludeLowercase = Boolean(includeLowercase.checked);
    const includeUppercase = document.getElementById("uppercaseLetters");
    let convertedUppercase = Boolean(includeUppercase.checked);
    const includeNmbers = document.getElementById("numbers");
    let convertedNumber = Boolean(includeNmbers.checked);
    const includeSymbols =  document.getElementById("symbols");
    let convertedIncludeSymbols = Boolean(includeSymbols.checked);
    const textResult = document.getElementById("try1");
       
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+-=";
        
        let allowedChars = "";
        let password = "";
        allowedChars += convertedIncludeLowercase ? lowercaseChars : "";
        allowedChars += convertedUppercase ? uppercaseChars : "";
        allowedChars += convertedNumber ? numberChars : "";
        allowedChars += convertedIncludeSymbols ? symbolChars : "";
        let lengthOfchosen = 0;
        
        if (convertdPasswordLength <= 0){
            textResult.textContent = "Password length must be atleast 1";
        }
        else if (allowedChars.length === 0){
            textResult.textContent = " Atleast one set of characters needs to be selected";
        }
        else {
            if(convertedIncludeLowercase){
                lengthOfchosen++;
                 const randomIndex1 = Math.floor(Math.random() * lowercaseChars.length);
                 password += lowercaseChars[randomIndex1];
            }
            if(convertedUppercase){
                lengthOfchosen++;
                 const randomIndex2 = Math.floor(Math.random() * uppercaseChars.length);
                 password += uppercaseChars[randomIndex2];
            }
            if(convertedNumber){
                lengthOfchosen++;
                 const randomIndex3 = Math.floor(Math.random() * numberChars.length);
                 password += numberChars[randomIndex3];
            }
            if(convertedIncludeSymbols){
                lengthOfchosen++;
                 const randomIndex4 = Math.floor(Math.random() * symbolChars.length);
                 password += symbolChars[randomIndex4];
            }
            for (let i = 0; i < convertdPasswordLength - lengthOfchosen; i++){
                const randomIndex = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[randomIndex];
            }
            textResult.textContent = `Generated password: ${password}`;
        }
}


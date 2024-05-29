
function takeOutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const trashout = true;
            if(trashout){
                resolve("You take out the trash");
            }
            else{
                reject("You didn't take out the trash.");
            }
        }, 500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You didn't cleaned the kitchen");
            }
        }, 2000);
    })
}

function walkDog(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const walkedDog = true;
            if(walkedDog){
                resolve("You walk the Dog");
            }
           else{
            reject("You didn't walked the dog.")
           }
        }, 2500);
    })
}

takeOutTrash().then(value => {console.log(value); return cleanKitchen()})
              .then(value => {console.log(value); return walkDog()})
              .then(value => {console.log(value); console.log("All chores finished!")})
              .catch(error => console.error(error));
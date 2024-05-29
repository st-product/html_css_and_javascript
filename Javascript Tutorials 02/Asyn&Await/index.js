
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

async function doChores(){
    try{
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        console.log("All chores finished");
    }
    catch(error){
        console.error(error);
    }
}

doChores();
fetchData();

async function fetchData(){
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // https://pokeapi.co/api/v2/pokemon/typhlosion 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const msg = document.getElementById("errorMessage");
        if(!response.ok){
            msg.textContent = "Could not fetch resource";
            throw new Error("Could not fetch resource");
        }
        msg.textContent = "";
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        if ( msg.textContent === "Could not fetch resource"){
            imgElement.style.dispaly = "none"; 
        }
        
        //console.log(data.sprites.front_default);
        
    } catch (error) {
        console.error(error);
    }
}
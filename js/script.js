// Button to show you the list of pokémons
document.getElementById("pokemon_list").onclick = () =>{
    location.href = "https://pokemon.fandom.com/wiki/List_of_Pok%C3%A9mon";
};

// Logic to get the information from the poke API by using JSON format
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let  pokeInput= pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        // console.log(res)
        if(res.status != "200"){
            pokeImage("img/pokemon_shadow.jpeg");
            pokeNombre("Incorrect pokémon");
            pokeType(`Type: `);
            pokeAtaque();
            pokehp();
            pokeDefensa();
            pokeAtaEsp();
            pokeDefEsp();
            pokeVelocidad();

        }else{
            return res.json();  
        }
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        let pokeNom = data.name;
        let pokeTip = data.types[0].type.name;
        let pokeHp = data.stats[0].base_stat;
        let pokeAtaq = data.stats[1].base_stat;
        let pokeDefe = data.stats[2].base_stat;
        let pokeAtaquEspe = data.stats[3].base_stat;
        let pokeDefenEspe = data.stats[4].base_stat;
        let pokeVelo = data.stats[5].base_stat;
        pokeImage(pokeImg);
        pokeNombre(`Name: ${pokeNom}`);
        pokeType(`Type: ${pokeTip}`);
        pokeAtaque(pokeAtaq);
        pokeVelocidad(pokeVelo);
        pokehp(pokeHp);
        pokeDefensa(pokeDefe);
        pokeAtaEsp(pokeAtaquEspe);
        pokeDefEsp(pokeDefenEspe);
    });   
}

const pokeImage =  (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeNombre = (nombre) => {
    const pokeNombre = document.getElementById("pokeNombre");
    pokeNombre.textContent= nombre;
}

const pokeType = (tipo) => {
    const pokeTip = document.getElementById("pokeType");
    pokeTip.textContent = tipo;
    
}

const pokeAtaque = (ataque) => {
    const ataques = document.getElementById("pokeAttack");
    ataques.textContent = ataque;    
}
const pokeVelocidad = (velocidad) => {
    const velocidads = document.getElementById("pokeVel");
    velocidads.textContent = velocidad;    
}
const pokehp = (hp) => {
    const pokeHP = document.getElementById("pokeHP");
    pokeHP.textContent = hp;    
}

const pokeDefensa = (defensa) => {
    const defensas = document.getElementById("pokeDeffense");
    defensas.textContent = defensa;    
}

const pokeAtaEsp = (ataEsp) => {
    const ataEsps = document.getElementById("pokeSpeAttack");
    ataEsps.textContent = ataEsp;    
}

const pokeDefEsp = (defEsp) => {
    const defEsps = document.getElementById("pokeSpeDef");
    defEsps.textContent = defEsp;    
}



async function getPokemon()
{
    const idPokemon = localStorage.getItem("pokeId")
    const pokeInfo = JSON.parse(localStorage.getItem("pokemon"))
    console.log(pokeInfo,"info do pokemon")

    const img = document.getElementById("pokeImage")
    img.src = pokeInfo.sprites.front_default
    img.alt = pokeInfo.name

    const pokename = document.getElementById("pokename")
    pokename.innerText = pokeInfo.name

    const li_type = document.getElementById("type")
    pokeInfo.types.forEach(async(item)=>{
        li_type.insertAdjacentHTML("beforeend",`
            
            <p>${item.type.name}</p>
            `)
    });
  

    const li_skills = document.getElementById("skills")
    pokeInfo.abilities.forEach(async(item)=>{
        li_skills.insertAdjacentHTML("beforeend",`
            <p>${item.ability.name}</p>
            `)
    });

    const li_stats = document.getElementById("stats")
    pokeInfo.stats.forEach(async(item)=>{
        li_stats.insertAdjacentHTML("beforeend",`
            <p>${item.stat.name} - ${item.base_stat}</p>
            `)
    });
}
getPokemon()
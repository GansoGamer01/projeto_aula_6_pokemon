async function getPokemon()
{
    const idPokemon = localStorage.getItem("pokeId")
    const pokeInfo = JSON.parse(localStorage.getItem("pokemon"))
    console.log(pokeInfo,"info do pokemon")

    const ul = document.querySelector("ul")
    ul.insertAdjacentHTML("beforeend",`
        <li>
            <p>${item.types}</p>
            <p>${item.abilities}</p>
            <p>${item.stats}</p>
        </li>
            `)

        const img = document.getElementById(item.name)
        img.src = pokeInfo.sprites.front_default

        const li = document.getElementById(`${item.name}li`)
            li.setAttribute("style",`background-color: ${colors[poke_infos.types[0].type.name]};`)
        console.log(li)

        li.addEventListener("click",()=>{
            console.log(poke_infos)
            localStorage.setItem("pokeId",item.id)
            localStorage.setItem("pokemon",JSON.stringify(poke_infos))
            window.location.href = "./POKEXPECS/index.html"
        })
}
getPokemon()
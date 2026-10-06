export async function buscar(text) {

    const url = `https://www.omdbapi.com/?s=${text}&apikey=9809253d`

    const resposta = await fetch(url)

    const dades = await resposta.json()

    return dades.Search
}

export async function info(e) {

    const url = `https://www.omdbapi.com/?i=${e}&apikey=9809253d`

    const resposta = await fetch(url)

    const dades = await resposta.json()

    return dades
}
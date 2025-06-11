async function fnpegarfilmes(){
    let filmes = await fetch("dados-filmes.json")
    console.dir(filmes)
    let filmestratados = await filmes.text()
    console.dir(filmestratados)

}
fnpegarfilmes("oi")
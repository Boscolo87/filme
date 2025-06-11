// JSON - javascript object notation

let filme1 =   {
    titulo: "Jurassic Park",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50m"
}
let filme2 =   {
    titulo: "Karate kid Lendas",
    foto: "filme2.jpg",
    avaliacao: "8/10",
    duracao: "1h40m"
}
let filme3 =   {
    titulo: "Litle Stitch",
    foto: "filme3.jpg",
    avaliacao: "10/10",
    duracao: "2h10m"
}
let filme4 =   {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "9/10",
    duracao: "2h30m"
}
let filme5 =   {
    titulo: "PREMONIÇÃO 6",
    foto: "filme5.webp",
    avaliacao: "9/10",
    duracao: "1h40m"
}

let todososfilmes = [filme1, filme2, filme3, filme4, filme5]

todososfilmes.forEach((filmeatual) => {
    document.querySelector(".lista-filmes").innerHTML += `
        <div class = "card-filme">
                <img src="img/${filmeatual.foto}">
                <h3>${filmeatual.titulo}</h3>
                <span>⭐${filmeatual.avaliacao}</span>
        </div>
        `
}
)
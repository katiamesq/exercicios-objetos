const carro = {
    marca: "Volkswagen",
    modelo: "Fusca",
    ano: 2002,
    cor: "azul",
    quantidade_portas: 2,
    automatico: false
}

const carros = [
    {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    cor: "vermelho",
    quantidade_portas: 4,
    automatico: false
},
{
    marca: "Fiat",
    modelo: "Uno",
    ano: 2012,
    cor: "Branca",
    quantidade_portas: 4,
    automatico: false
},
{
    marca: "Honda",
    modelo: "Honda City",
    ano: 2010,
    cor: "Preto",
    quantidade_portas: 4,
    automatico: true
},
]

for (let carro of carros) {
    console.log (carro.modelo)
}









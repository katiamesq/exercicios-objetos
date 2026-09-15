const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

if (idade >= 18){
    console.log (true);
}
else {}

console.log( usuarios.maior_idade ) // undefined
usuarios.maior_idade = idade;
console.log( usuarios )

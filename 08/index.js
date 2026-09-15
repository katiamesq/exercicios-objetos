const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

usuarios.forEach(({ nome, pets }) => {
    if (pets.length === 0) {
        console.log(`Sou ${nome} e não tenho pets`);
    } else if (pets.length > 1) {
        console.log(`Sou ${nome} e tenho ${pets.length} pets`);
    } else {
        console.log(`Sou ${nome} e tenho 1 pet`);
    }
});

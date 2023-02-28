import readlineSync from "readline-sync";

const propriedadesCss = [];
let insert = "";

// Utilizado o laço while para executar enquanto a variável "insert" não for igual a "sair".
while (insert != "sair") {
    insert = readlineSync
        .question("digite uma propriedade CSS: ")
        .toLocaleLowerCase();

    if (insert) {
        propriedadesCss.push(insert);
    }
}

console.log(
    propriedadesCss
        .sort()
        .filter((prop) => prop !== "sair" && Boolean(prop))
        .join("\n")
);
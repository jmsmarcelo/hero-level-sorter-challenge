//Variáveis
const nickname = "jmsmarcelo";
let level = "";

//Laço de repetição, operadores
for(let i = 1; i < 11000; i = i + 1000) {
    //Estruturas de decisões
    if(i <= 1000) {
        level = "Ferro";
    } else if(i >= 1001 && i <= 2000) {
        level = "Bronze";
    } else if(i >= 2001 && i <= 6000) {
        level = "Prata";
    } else if(i >= 6001 && i <= 7000) {
        level = "Ouro";
    } else if(i >= 7001 && i <= 8000) {
        level = "Platina";
    } else if(i >= 8001 && i <= 9000) {
        level = "Ascendente";
    } else if(i >= 9001 && i <= 10000) {
        level = "Imortal";
    } else {
        level = "Radiante";
    }
    //Saída
    console.log("O Herói de nome " + nickname + " está no nível de " + level);
}
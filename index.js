//Variáveis
const nickname = "jmsmarcelo";
let xp = 1;

//Laço de repetição, operadores
for(let level = ""; xp < 11000; xp += 1000) {
    //Estrutura de desisão
    if(xp <= 1000) {
        level = "Ferro";
    } else if(xp <= 2000) {
        level = "Bronze";
    } else if(xp <= 6000) {
        level = "Prata";
    } else if(xp <= 7000) {
        level = "Ouro";
    } else if(xp <= 8000) {
        level = "Platina";
    } else if(xp <= 9000) {
        level = "Ascendente";
    } else if(xp <= 10000) {
        level = "Imortal";
    } else {
        level = "Radiante";
    }
    //Saída
    console.log("O Herói de nome " + nickname + " está no nível de " + level);
}
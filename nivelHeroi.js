var nome = "Arnaldinho";
var vitorias = 200;
var derrotas = 20;
var xp = vitorias - derrotas;
let nivel;

if(xp <= 10){
    nivel = "Ferro";
} else if (xp>=11 && xp<=20){
    nivel = "Bronze";
} else if (xp>=21 && xp<=50){
    nivel = "Prata";
} else if (xp>=51 && xp<=70){
    nivel = "Ouro";
} else if (xp>=71 && xp<=80){
    nivel = "Platina";
} else if (xp>=81 && xp<=90){
    nivel = "Ascendente";
} else if (xp>=91 && xp<=100){
    nivel = "Imortal";
}  else if (xp>=101){
    nivel = "Radiante";
}

print("O herói de nome " + nome + " está no nível de " + nivel);

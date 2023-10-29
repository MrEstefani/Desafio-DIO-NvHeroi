let nivel = ""
let oDado = [ 1 , 2 , 3 , 4 , 5 , 6 ]
// INICIO
console.log("Seja bem vindo bravo herói, os dados mágicos serão rodados duas vezez e irá nos dizer qual será seu nível de herói. Boa Sorte!")
// PRIMEIRO DADO
console.log("Primeiro dado mágico será rodado...")
let nDado = Math.floor(Math.random() * oDado.length + 1)
console.log("Você tirou um " + nDado)
let xp = nDado
// SEGUNDO DADO
console.log("Segundo dado será rodado...")
nDado = Math.floor(Math.random() * oDado.length + 1)
console.log("Você tirou um " + nDado)
xp = (xp + nDado)*1000
console.log("Total de XP: " + xp)
// CLASSIFICAÇÃO
if (xp <= 1000){
    nivel = "Ferro" 
}else if((xp > 1000) && (xp <= 2000)){
    nivel = "Bronze"
}else if((xp > 2000) && (xp <=5000)){
    nivel = "Prata" 
}else if((xp > 6000) && (xp <= 7000)){ 
   nivel = "Ouro" 
}else if((xp >7000) && (xp <= 8000)){
   nivel = "Platina" 
}else if((xp >8000) && (xp <= 9000)){
   nivel = "Ascendente" 
}else if((xp >9000) && (xp <= 10000)){ 
   nivel = "Imortal" 
}else{
   nivel = "Radiante"
}
console.log("Nível do Herói: " + nivel)

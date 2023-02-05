let num=1;
num++;
n=num;
function Successivo(n){
console.log("il numero succesivo "+n)
}
function SuccessivoDispari(n){
if(n%1==0){
console.log("il numero dispari succesivo e"+n)  
}
}

module.exports = {successivo: Successivo, successivodispari:SuccessivoDispari}

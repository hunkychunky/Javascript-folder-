let dolphinFirstScore = 96;
let dolphinSecondScore = 108;
let dolphinThirdScore = 89;

let koalaFirstScore = 88;
let koalaSecondScore = 91;
let koalaThirdScore = 110;

const averageDolphinScore = (dolphinFirstScore+dolphinSecondScore+dolphinThirdScore)/3;
const averageKoalaScore = (koalaFirstScore+koalaSecondScore+koalaThirdScore)/3;

console.log(averageDolphinScore, averageKoalaScore);

if (averageKoalaScore>averageDolphinScore && averageKoalaScore>=100){
    console.log("Koalas are the winners!")
}else if(averageDolphinScore>averageKoalaScore && averageDolphinScore>=100){
    console.log("Dolphins are the winners!")
}else if(averageKoalaScore===averageDolphinScore && averageDolphinScore>=100 && averageKoalaScore>=100){
    console.log("It's a draw.")
}else{
    console.log("None of them win")
};

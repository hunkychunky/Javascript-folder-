const averageScore =(a,b,c)=> (a + b + c) /3;

const dolphinsScore = averageScore(44, 23, 71);
const koalascore = averageScore(65, 54, 49);

const winner = function(dolphinAverge, koalaAverage){
    if (dolphinAverge>= (2*koalaAverage)){
        console.log(`Dolphins have ${dolphinAverge}points making them the winner`);
    }else if (koalaAverage >= (2*dolphinAverge)){
        console.log(`Koalas have ${koalaAverage}points making them win`)
    }else{
        console.log('No team wins.');
    }
}
winner(dolphinsScore, koalascore);


koalascore = averageScore(85, 54, 41);
dolphinsScore = averageScore(23, 34, 27);
console.log(dolphinsScore,koalascore);
winner(koalascore,dolphinsScore);
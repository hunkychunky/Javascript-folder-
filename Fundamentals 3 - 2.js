const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill*(15/100):
    bill * (20/100); 
}

const bills = [125, 55, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[0] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
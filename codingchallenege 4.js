let firstBill = 275;
let secondBill = 40;
let thirdBill = 430;

let firstTip = firstBill >= 50 && firstBill<= 300 ? firstBill * (15/100):
firstBill * (20/100);
let secondTip = secondBill >= 50 && secondBill<= 300 ? secondBill * (15/100):
secondBill * (20/100);
let thirdTip = thirdBill >= 50 && thirdBill<= 300 ? thirdBill * (15/100):
thirdBill * (20/100);

console.log(`The bills were ${firstBill, secondBill, thirdBill}, the tips were ${firstTip, secondTip, thirdTip} and the total values where ${(firstTip+firstBill), (secondTip+secondBill), (thirdTip+thirdBill)}`);
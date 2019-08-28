
function greaterNumber(a, b, c){
    var count= 0;
 while(a!=b){
    var reverse =0;
 reverse = parseFloat(i.toString().split('').reverse().join(''))*Math.sign(i);
 if(Math.abs(a-reverse)%c==0){
    count++;
    a++;
 }}
 return count;
 }
 alert(greaterNumber(7, 15, 4));
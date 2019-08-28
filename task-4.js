function PhoneNumber(number){
    number.unshift('"', "(");
    number.splice(5, 0, ")", " ");
    number.splice(10, 0, "-");
    number.push('"');
    return number.join('');
   }alert(phoneNumber([1,2,3,4,5,6,7,8,9,0]));
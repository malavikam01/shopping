//try catch finally
exp = '23*76+97';
try{
    console.log('try block');
    console.log(eval(exp));//error
}
catch{
console.log('catch block');
console.log('error');
exp = '23*76+97'
console.log(eval(exp));
}
finally{
    console.log('finally block');
    console.log('always executed');
}
console.log('data transmitted',+ eval(exp));
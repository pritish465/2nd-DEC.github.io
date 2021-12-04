let calc={

    'sum_apply':function(a,b,c){
        let result=a +b +c;
        console.log(result);



    },

    'mul_apply':function(a,b,c){
        let result=a * b  *c;
        console.log(result);



    },

    'sum':function(){
        let  result=this.num1+this.num2;
        console.log(result);
    },
    'mul':function(){
        let  result=this.num1*this.num2;
        console.log(result);
    },
    'div':function(){
        let  result=this.num1/this.num2;
        console.log(result);
    },
    'diff':function(){
        let  result=this.num1-this.num2;
        console.log(result);
    },
    'mod':function(){
        let  result=this.num1%this.num2;
        console.log(result);
    }
};
//THIS VAR SET IS FOR  USE CALL FUNCTIONS
var set1={
    'num1':30,

    'num2':18,
};

//THIS VAR SET IS FOR  USE APPLY  FUNCTIONS
var set2={
     array:[25,35,45],
};

//THIS VAR SET IS FOR  USE BIND FUNCTIONS
var set3={
    'num1':70,

    'num2':30,


}

//USE OF CALL 
console.log("=====================THIS ALL ARE THE FUNCTIONS USING CALL==================== ");
console.log("sum of 30 and 18");
calc.sum.call(set1);
console.log("multipy of 30 and 18");
calc.mul.call(set1);
console.log("substraction of 30 and 18");
calc.diff.call(set1);
console.log("module of 30 and 18");
calc.mod.call(set1);


//USE OF APPLY
console.log("=====================THIS ALL ARE THE FUNCTIONS APPLY CALL==================== ");
console.log("sum of 25 and 35 and 45");
calc.sum_apply.apply(set2,set2.array);
console.log("multiply of 25 and 35 and 45");
calc.mul_apply.apply(set2,set2.array);



//USE OF BIND
console.log("=====================THIS ALL ARE THE FUNCTIONS BIND CALL==================== ");
console.log("sum of 70 and 30 using bind");
let new_sum=calc.sum.bind(set3);
new_sum();
console.log("multiply of 70 and 30 using bind");
let new_mul=calc.mul.bind(set3);
new_mul();
console.log("substraction of 70 and 30 using bind");
let new_diff=calc.diff.bind(set3);
new_diff();
console.log("mod of 70 and 30 using bind");
let new_mod=calc.mod.bind(set3);
new_mod(); 
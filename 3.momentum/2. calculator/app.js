const calculator = {
  plus : function(a,b){
    console.log(a+b);
  },
  min : function(a,b){
    console.log(a-b);
  },
  div : function(a,b){
    console.log(a/b);
  },
  mul: function(a,b){
    console.log(a*b);
  },
  power:function(a,b){
    console.log(a**b);
  },
};


calculator.plus(3,4);
calculator.min(4,3);
calculator.div(6,4);
calculator.mul(4,3);
calculator.power(3,2);
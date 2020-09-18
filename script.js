function cal(){
    var x= document.getElementById("input1").value;
    var y= document.getElementById("input2").value;
    var result = Number(x) + Number(y);
    document.getElementById("result").value= result;
}
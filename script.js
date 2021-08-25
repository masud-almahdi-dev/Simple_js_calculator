var str = 'C←$÷789×456-123+%0.=';
for (let i = 0; i < str.length; i++) {
    if(i%4 === 0){
        let br = document.createElement("br")
        document.getElementById("keyboard").appendChild(br)
    }
    let btns = document.createElement("button")
    let idn = str.charAt(i)
    
    
    if(idn === '$'){idn = "PM"}
    
    
    if(idn === '⏎'){
        btns.setAttribute("id", "ENTER");
    }
    else{
        btns.setAttribute("id", idn);
    }

    btns.innerHTML = idn
    if(idn==="PM"){
        btns.innerHTML = "&#x207a;&#x2044;&#x208b";
    }
    


    if(idn == 'C'){
        btns.setAttribute("onclick", `clearfunc()`)
    }
    else if(idn == '%'){
        btns.setAttribute("onclick", `operatorfunc("%")`)
    }
    else if(idn == '÷'){
        btns.setAttribute("onclick", `operatorfunc("÷")`)
    }
    else if(idn =='+'){
        btns.setAttribute("onclick", `operatorfunc("+")`)
    }
    else if(idn =='-'){
        btns.setAttribute("onclick", `operatorfunc("-")`)
    }
    else if(idn =='×'){
        btns.setAttribute("onclick", `operatorfunc("×")`)
    }
    else if(idn =='='){
        btns.setAttribute("onclick", `operatorfunc("=")`)
    }
    else if(idn =='←'){
        btns.setAttribute("onclick", `btnbackspacefunc()`)
    }
    else if(idn =='PM'){
        btns.setAttribute("onclick", `negate()`)
    }
    else{
        btns.setAttribute("onclick", `btnfunc('${idn}')`);
    }


    document.getElementById("keyboard").appendChild(btns)
}

var btnfunc = (input) =>{
    document.getElementById("op2").innerHTML += input;
}
var btnbackspacefunc = () =>{
    var str = document.getElementById("op2").innerHTML;
    if(str.length > 0)
    document.getElementById("op2").innerHTML = str.substring(0, str.length - 1);
}
var operatorfunc = (type) =>{
    var temp = parseFloat(document.getElementById("op1").innerHTML);

    if(document.getElementById("oper").innerHTML === ""){
        temp=parseFloat(document.getElementById("op2").innerHTML);

    }else if(document.getElementById("oper").innerHTML === "+"){
        temp+=parseFloat(document.getElementById("op2").innerHTML);
        
    }else if(document.getElementById("oper").innerHTML === "-"){
        temp-=parseFloat(document.getElementById("op2").innerHTML);
        
    }else if(document.getElementById("oper").innerHTML === "×"){
        temp*=parseFloat(document.getElementById("op2").innerHTML);
        
    }else if(document.getElementById("oper").innerHTML === "÷"){
        temp/=parseFloat(document.getElementById("op2").innerHTML);
        
    }else if(document.getElementById("oper").innerHTML === "%"){
        temp*=parseFloat(document.getElementById("op2").innerHTML);
        temp/=100;
        
    }
    if(!(document.getElementById("op2").innerHTML==="")){document.getElementById("op1").innerHTML = temp;}
    document.getElementById("op2").innerHTML = "";
    if(type==="="){
        document.getElementById("oper").innerHTML = "";
    }else{
        document.getElementById("oper").innerHTML = type;
    }
}
var negate = () =>{
    var str = document.getElementById("op2").innerHTML;
    if(str.charAt(0) === '-'){
        document.getElementById("op2").innerHTML = str.substring(1, str.length);
    }else{
        document.getElementById("op2").innerHTML = "-";
        document.getElementById("op2").innerHTML += str;
    }    
}
var clearfunc = () =>{
    document.getElementById("op2").innerHTML = "";
    document.getElementById("op1").innerHTML = "0";
    document.getElementById("oper").innerHTML = "";
}
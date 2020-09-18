function getHistorico(){
	return document.getElementById("historico-value").innerText;
}
function printHistorico(num){
	document.getElementById("historico-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operador");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistorico("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//se a saída tem um valor
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var historico=getHistorico();
			if(output==""&&historico!=""){
				if(isNaN(historico[historico.length-1])){
					historico= historico.substr(0,historico.length-1);
				}
			}
			if(output!="" || historico!=""){
				output= output==""?output:reverseNumberFormat(output);
				historico=historico+output;
				if(this.id=="="){
					var result=eval(historico);
					printOutput(result);
					printHistorico("");
				}
				else{
					historico=historico+this.id;
					printHistorico(historico);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("numero");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //se a saída for um número
			output=output+this.id;
			printOutput(output);
		}
	});
}
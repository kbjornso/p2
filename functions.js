var isArmstrong = function(k){
	"use strict";
	k = k.toString();
	var m= k.length;
	var number, sum = 0;
	for( var i = 0; i < m; ++i){
		number= Number(k[i]);
		var multi = Math.pow(number,m);
		sum = sum + multi;
	}
	if (Number(k)==sum){
		return true;
	}
	else{return false}
}
var allArmstrongs = function(){
	var result = "";
	//generate
	for(var k = 1; k<=99999; ++k){
		//test
		if(isArmstrong(k)){
			result = result + k + " ";}
		}
		return result;
	}

var allSubstrings1 = function(s){
	var result ="";
	for(var i = 0; i< s.length; i++) {
		for(var j = i+1; j<=s.length;j++) {
			var str = s.substring(i,j);
            result = result + str + ", ";
		}
	}
	return result;
}



var allSubstrings2 = function(s){
	var array =[];
	for(var i = 0; i< s.length; i++) {
		for(var j = i+1; j<=s.length;j++) {
			var str = s.substring(i,j);
			array.push(str);
		}
	}
	return array;
}
var maxWord = function(s) {

	words = s.split(" ");
	var maxSoFar = words[0]
	for(var i = 0; i < words.length; ++i){
			if (maxSoFar.length < words[i].length)
				{ maxSoFar = words[i]}

			}
 return maxSoFar;
}


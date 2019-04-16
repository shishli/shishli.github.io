function maxFiveDigits(num){
	// 方法一
	if( typeof num !== 'number') {
		return;
	} else if(num.length <= 5){
		return num;
	}
	let max = 0;
	num = num.toString();
	for(let i=0,len=num.length;i<len-4;i++){
		let five = num.substring(i,i+5);
		//substring[start,end)? substr(start,length)? slice[start,end)
		max = five > max ? five : max;
	}
	return max;
	console.log(max);

	// 方法二
	
}

maxFiveDigits(234123);
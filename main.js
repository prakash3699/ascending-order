var a=5, b=33, c=2;

if((a<b)&&(a<c))
{
	if(b<c){
		console.log(a,b,c);
	}
	else{
		console.log(a,c,b)
	}
}

if((b<a)&&(b<c)){
	if(a<c){
		console.log(b,a,c);
	}
	else{
		console.log(b,c,a);
	}
}


if((c<a)&&(c<b)){
	if(b<a){
		console.log(c,b,a);
	}
	else{
		console.log(c,a,b);
	}
}

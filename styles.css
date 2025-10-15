//your JS code here. If required.
const btn = document.getElementById('btn');
const promise1 = (ip)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		const ip =Number(document.getElementById('ip').value);
		resolve(ip);
	},2000)
	})
} 
const promise2 = (data)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			data=data*2;
			resolve(data);
		},2000)
	})
}
const promise3 = (data)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			data=data-3;
			resolve(data);
		},1000)
	})
}
const promise4 = (data)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			data=data/2;
			resolve(data);
		},1000)
	})
}
const promise5 = (data)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			data=data+10;
			resolve(data);
		},1000)
	})
}

btn.addEventListener('click',()=>{
	const output=document.getElementById('output');
	promise1().then((value)=>{
		output.innerHTML=`Result: ${value}`
		return promise2(value);
	}).then((value)=>{
		output.innerHTML=`Result: ${value}`
		return promise3(value);
	}).then((value)=>{
		output.innerHTML=`Result: ${value}`
		return promise4(value);
	}).then((value)=>{
		output.innerHTML=`Result: ${value}`
		return promise5(value);
	}).then((value)=>{
       output.innerHTML=`Final Result: ${value}`
	})
	
})
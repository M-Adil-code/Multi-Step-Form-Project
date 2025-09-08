let nextstep=document.querySelector('.Next')
let backstep=document.querySelector('.Back')
let firststepdiv=document.querySelector('.firststep')
let secondstep=document.querySelector('.secondstep')
let thirdstep=document.querySelector('.thirdstep')
let sidebar=document.querySelector('.sidebar')
let main=document.querySelector('main')
let index=0;
backstep.style.visibility='hidden';
sidebar.children[index].querySelector('.sidebar-numbers').classList.add('sidebar-numbers-slected')

let data={
	name:'',
	email:'',
	password:'',
	period:'',
	periodlevel:'',
	periodprize:'',
	plan:'',
	addone:''

}
let check=()=>{
	if(index===0){
		let name=firststepdiv.querySelectorAll('input')[0].value;
		let email=firststepdiv.querySelectorAll('input')[1].value;
		let password=firststepdiv.querySelectorAll('input')[2].value;
		if(name!=='' && email !=='' && password!==''){
			console.log('done firststep')
			return('ok')
		}
		else{
			return('nok')
		}
	}
	else if(index===1){
		console.log('secondstep')
		let period=secondstep.querySelector('input').checked===true ?'yearly':'monthly';
		data.period=period;
		
		let plan=Array.from(secondstep.querySelectorAll('.plan-level')).filter((item)=>{
			return(item.classList.contains('selected'))
		})
		console.log(plan,'check')
		if(plan.length===1){
			data.periodlevel=plan[0].children[1].children[0].textContent;
			data.periodprize=plan[0].children[1].children[1].textContent;
			return('ok')
		}

	}
}
nextstep.addEventListener("click",()=>{

	console.log(check()==='ok')
	if(check()==='ok'){
		if(index<=2){
	 	 backstep.style.visibility='visible';
	 	 //console.log(index,'before update')
		 sidebar.children[index].querySelector('.sidebar-numbers').classList.remove('sidebar-numbers-slected')
		 main.children[index+1].classList.add('d-none')
		 index++;
		 //console.log(index,'after update')
		 sidebar.children[index].querySelector('.sidebar-numbers').classList.add('sidebar-numbers-slected')
		 main.children[index+1].classList.remove('d-none')
		}
		else{
		//console.log('this happend')
	     main.children[index+1].classList.add('d-none')
    	 main.children[index+2].classList.remove('d-none')
    	 nextstep.classList.add('d-none')

		}
	}else{
		alert('Something went wrong')
	 }
	 
	}
	
	
);
backstep.addEventListener("click",()=>{
	if(index>=1){
		nextstep.classList.remove('d-none')
	 	console.log(index,'beforeup')
	 	sidebar.children[index].querySelector('.sidebar-numbers').classList.remove('sidebar-numbers-slected')
	 	main.children[index+1].classList.add('d-none')
	 	main.children[index+2].classList.add('d-none')
	 	console.log(main.children[index+2])
	 	index--;
	 	sidebar.children[index].querySelector('.sidebar-numbers').classList.add('sidebar-numbers-slected')
	 	 main.children[index+1].classList.remove('d-none')
	 	 console.log(index,'after')
	 	 if(index==0){
	 	 	
	 	 	 backstep.style.visibility='hidden';
	 	 }

	}else{
		 
    	

	}
})


secondstep.querySelectorAll('.plan-level').forEach((item)=>{

	item.onclick=()=>{

		
		if(item.classList.contains('selected')){
			item.classList.remove('selected')
		}
		else{
			item.classList.add('selected')
		}
		let allplans=Array.from(secondstep.querySelectorAll('.plan-level'));
		let otherplans=allplans.filter((thisitem)=>{
			return(thisitem!==item)
		})
		otherplans.forEach((ite)=>{
			ite.classList.remove('selected')
		})
		
	}
})
secondstep.querySelector('input').addEventListener('click',(e)=>{
	let planlevelcontainer=secondstep.querySelector('.plan-level-container')
	let planselector=secondstep.querySelector('.plan-selector')
	if(e.target.checked===true){
		planselector.querySelectorAll('h5')[1].classList.add('selected')
		planselector.querySelectorAll('h5')[0].classList.remove('selected')
		planlevelcontainer.children[0].querySelector('.text-muted').textContent='$90/Yr';
		planlevelcontainer.children[1].querySelector('.text-muted').textContent='$120/Yr';
		planlevelcontainer.children[2].querySelector('.text-muted').textContent='$150/Yr';
	}
	else{
		planselector.querySelectorAll('h5')[0].classList.add('selected')
		planselector.querySelectorAll('h5')[1].classList.remove('selected')
		planlevelcontainer.children[0].querySelector('.text-muted').textContent='$9/mo';
		planlevelcontainer.children[1].querySelector('.text-muted').textContent='$12/mo';
		planlevelcontainer.children[2].querySelector('.text-muted').textContent='$15/mo';
	}
})
thirdstep.querySelectorAll('.plan-level').forEach((item)=>{
	let input=item.querySelector('input')

	item.onclick=()=>{
		if(input.checked===true){
			input.checked=false;
			item.classList.remove('selected')
			
		}
		else{
			input.checked=true;
			item.classList.add('selected')
		}
	}
	
	
})


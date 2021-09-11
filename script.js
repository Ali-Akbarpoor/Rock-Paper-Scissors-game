 const items = document.querySelectorAll('.game-item'),
 gamePlan = document.querySelector(".plan"),
 result = document.querySelector(".upshot"),
 resultTag = document.querySelector(".result-tag"),
 resetBtn = document.querySelector("#resetBtn");

 let aiItem = document.querySelector(".ai-picked"),
 userItem = document.querySelector(".user-picked");



for(let i = 0; i <= items.length -1 ; i++){
	items[i].addEventListener("click",()=>{
		let userSelect = i;
		gamePlan.classList.add('hide');
		if(userSelect == 0){
			userItem.setAttribute("src" , "img/paper.png")
		}
		if(userSelect == 1){
			userItem.setAttribute("src" , "img/rock.png")
		}
		if(userSelect == 2){
			userItem.setAttribute("src" , "img/scissor.png")
		}
		checkGame(i);
		result.classList.remove('hide');
	});
}

function checkGame(userPicked){
	let aiSelect = Math.trunc(Math.random()*3);
	
	if(aiSelect == 0){
		aiItem.setAttribute("src" , "img/paper.png")	
	}
	if(aiSelect == 1){
		aiItem.setAttribute("src" , "img/rock.png")	
	}
	if(aiSelect == 2){
		aiItem.setAttribute("src" , "img/scissor.png")	
	}
	
	//Check Winner 

	//DRAW
	if(aiSelect == userPicked){
		resultTag.innerHTML = "DRAW!";
	}
	//COMPUTER WINNER
	console.log(userPicked);
	if(aiSelect==0 && userPicked == 1){
		resultTag.innerHTML = "COMPUTER WINNER!";
		document.querySelector("#cpu-score-tag").innerHTML = Number(document.querySelector("#cpu-score-tag").innerHTML )+1
	}
	if(aiSelect==1 && userPicked == 2){
		resultTag.innerHTML = "COMPUTER WINNER!";
		document.querySelector("#cpu-score-tag").innerHTML = Number(document.querySelector("#cpu-score-tag").innerHTML )+1
		
	}
	if(aiSelect==2 && userPicked == 0){
		resultTag.innerHTML = "COMPUTER WINNER!";
		document.querySelector("#cpu-score-tag").innerHTML = Number(document.querySelector("#cpu-score-tag").innerHTML )+1
	}

	//PLAYER WINNER
	if(userPicked == 0 && aiSelect == 1){
		resultTag.innerHTML = "YOU WINNER!";
		document.querySelector("#user-score-tag").innerHTML = Number(document.querySelector("#user-score-tag").innerHTML )+1

	}
	if(userPicked == 1 && aiSelect == 2){
		resultTag.innerHTML = "YOU WINNER!";
		document.querySelector("#user-score-tag").innerHTML = Number(document.querySelector("#user-score-tag").innerHTML )+1		
	}
	if(userPicked == 2 && aiSelect == 0){
		resultTag.innerHTML = "YOU WINNER!";
		document.querySelector("#user-score-tag").innerHTML = Number(document.querySelector("#user-score-tag").innerHTML)+1
	}

}

resetBtn.addEventListener("click" , ()=>{
	result.classList.add("hide");
	gamePlan.classList.remove("hide");
})
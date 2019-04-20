var ds = document.getElementById("background");
var ctx = ds.getContext("2d");
var run = (Math.random()*480)+260;
var straight = (Math.random()*852);
var bg = new Image();
bg.src = "1.jpg";
var bw = 852;
var bh = 500;
var running;
var caughtThief = false;
var th=new Image();
th.src = "RITEAIDOLD101512A_8778259-600x417.jpg";
var count = 0;
var number = 11;

//moving background

bg.onload = function background() {
	var cycle = 0 ;
	var sourceEnd = 852;
	 
	running = setInterval(function(){
	  if(caughtThief==false){
		 ctx.clearRect(0,0,852,500); //clear the canvas
		 ctx.drawImage(bg,cycle,0,sourceEnd,bh,0, 0,sourceEnd,bh);
		 ctx.drawImage(bg,0,0,bw,bh,sourceEnd,0,bw,bh); //redraw bg
		 cycle=(cycle+1)%852;
		 (sourceEnd < 10)? sourceEnd=852:sourceEnd -= 1;
		 if(time === 0 || count>10){
		   ctx.clearRect(0,0,852,500);
		   ctx.drawImage(bg,0,0,bw,bh);
		   }
	  }
	   else {
			 clearInterval(myTimer); 			   
	     	 ctx.clearRect(0,0,852,500);
		     ctx.drawImage(th,250,100,400,400);
			 
		   }
	
	  },30);
	 
	  
	 
}

    //timer event

	var time =30;
	var timer = setInterval(myTimer,1000);
	function myTimer(){
		time = (time-1);
		document.getElementById("timeDisplay").innerHTML=time;
		
		if(time === 0){
			clearInterval(timer);
			alert("you are out of time");}
		else if(count>10){
			clearInterval(timer);
		    alert("you are out of moves")
		}else{}
			
		
	}
        //position of the thief
     
      document.getElementById("background").onclick=function positionOfThief(event){
		  run = (Math.random()*480)+260;
		  straight = (Math.random()*850);
		  count=count+1;
		  var x = event.offsetX;
		  var y = event.offsetY;
		  console.log("X: "+x);
		  console.log("Y :"+y);
		  
	  if(run<=x && x <=run+200 && straight<= y && y <= straight+250){
			alert ("you found the thief"); 
		    caughtThief = true;
			clearInterval(timer);
			time=0;
			  
			  
				  
			  alert("Finally you got him ");
		  }
		 if(caughtThief==true){
				 document.getElementById("location").innerHTML="The thief is at the location  " + x +  "and " + y;
				 document.getElementById("moves").innerHTML="moves : " + count;
		 }else{
				 document.getElementById("moves").innerHTML="moves : " + count;
				 
				 document.getElementById("movesLeft").innerHTML ="you have " + (number - count) + " moves left";
				 
			 }	   
		         
	  }
	  
	  
	 



	


                     
 <script type="text/javascript">
	    function doAGuess(correctAnswer){
		     var guess = Math.random();
        	 guess = guess*6;
	         guess = Math.floor(guess);
	 
	       if( guess == correctAnswer){;
	         return(true);
			 }
		   else{
		   return(false);
		   }
		
		}
	  
	     document.getElementById("guess").onclick=function(){
		 var myNumber=document.getElementById("myNumber").value;
		 var gotIt = false;
		 var numberOfGuesses = 1;
		 while(gotIt == false){
		 
		 
	 
		 if(doAGuess(myNumber) ==true){
		 gotIt = true;
		 
		 alert("Got it ! it was " + myNumber+ ",It took me " + numberOfGuesses + " guesses.");
		 }
		 else{
		     numberOfGuesses++;
		 
		 }
		 }
	     }
	  
	  </script>
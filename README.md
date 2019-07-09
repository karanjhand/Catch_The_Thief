# Catch_The_Thief
Catching the hidden thief on mouse clicks

   The main motive of this project is to find the thief by clicking inside the canvas region. As we open the browser the background appears and it starts moving. The background appears as we open the browser by using the onload, and the background is run by using the set Interval().A Boolean expression caughtThief is used  to find whether the thief is caught or not. 
myTimer function is used for the timer event, as it gives the user 30 seconds to catch the thief.If  the user is able to catch the thief then the background stops moving and the timer also stops. The counter is also added which counts the number  of clicks by the user on the canvas.
One more function to calculate the position of the thief is added. The function is called the positionOfThief which is run when we click on the screen. In this function a rectangle is formed by using the Math.random which is continuously changing the position inside the canvas . offset event is used to find the position of the click on the canvas region, which is further used to find the postion of the thief. In here the onclick event is used so when the user clicks on the screen and the click is at the right place that is on the rectangle which is randomly moving behind the screen then the message pops up giving the information that the  thief is found. The counter is declared inside this function so when the user clicks on the canvas the counter increases by 1.
This counter is further used as the moves of the user.

Winner 
For winning the game the user has to beat the time which is set as 30 seconds, and also the user has to find the thief in the minimum number of moves because the maximum moves the user can use are 10 and if the user is able to catch the thief within the time limit and within the given number of moves  then the user wins the game.  And the picture along with the position of the thief appears on the canvas. 

Loser 
If the user is unable to catch the thief within the time limit or if the number of moves exceed the maximum number of moves then the user lose the game. 


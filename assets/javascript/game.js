$(document).ready(function(){

    var random = Math.floor(Math.random()*102 + 19)
     
    $('#matchThis').text(random);
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);

    var playerTotal = 0;
    var wins =0;
    var losses = 0;


    $("wins").text(wins);
    $("losses").text(losses);
    
   function restart(){
       random = Math.floor(Math.random()*102 + 9);
       console.log(random);
       $('#matchThis').text(random);
       num1 = Math.floor(Math.random()* 12+1);
       num2 = Math.floor( Math.random()*12+1);
       num3 = Math.floor(Math.random() *12+1);
       num4 = Math.floor(Math.random()*12+1);
       playerTotal = 0;
       $('#totalScore').text(playerTotal);
       
   }

function winner(){
    alert("winner! You won!");
    wins++;
    $('#wins').text(wins);
    restart();
}
function losser(){
    alert("Sorry! You lose!");
    losses++;
    $("losses").text(losses);
    restart()
}




    $('.red').on('click',function(){
        
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

        if(playerTotal == random){

            winner();
        }
        else if (playerTotal > random){
            losser();
        }
        
        
    })

    $('.blue').on('click',function(){
        playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);

      if(playerTotal == random){
          winner();
      }
      else if(playerTotal > random){
          losser();
      }
      

        
    })
    $('.yellow').on('click',function(){
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        if(playerTotal == random){
            winner();
        }
        else if(playerTotal > random){
            losser();

        }
        
        
    })
    $('.green').on ('click',function(){
        
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        if(playerTotal == random){
            winner();
        }
        else if(playerTotal > random){
            losser();
        }
        
        
    })
})
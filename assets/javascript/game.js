$(document).ready(function(){

    var random = Math.floor(Math.random()*102 + 19)
    $('#matchThis').text(random);
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);
    var wins =0;
    var losses = 0;
    var userTotalScore = 0;
    $("wins").text(wins);
    $("losses").text(losses);
      function playgame(){
          if (userTotalScore === random){
            wins++;
            $("#wins").text(wins);
            alert("winner! You won!");
            random = Math.floor(Math.random()*102 + 9);
            $('#matchThis').text(random);
            userTotalScore = 0;
            $('#current-score-counter').text(userTotalScore);
            restart();
          
           } else if (userTotalScore > random){
            losses++;
            $("#losses").text(losses);
            alert("Sorry! You lose!");
            random = Math.floor(Math.random()*102 + 9); 
            $('#matchThis').text(random);

           userTotalScore = 0;
            $('#current-score-counter').text(userTotalScore);
            restart();

           }
        }

    
   function restart(){
       num1 = Math.floor(Math.random()* 12+1);
       num2 = Math.floor( Math.random()*12+1);
       num3 = Math.floor(Math.random() *12+1);
       num4 = Math.floor(Math.random()*12+1);
      
     }

   $('.red').on('click',function(){
        userTotalScore +=num1;
       $('#current-score-counter').text(userTotalScore);
       console.log("New playerTotal= " + userTotalScore);
       playgame();

        })

    $('.blue').on('click',function(){
        userTotalScore +=num2;
        $('#current-score-counter').text(userTotalScore);
        console.log("New playerTotal= " + userTotalScore);
        playgame();
    
      })
    $('.yellow').on('click',function(){
        userTotalScore +=num3;
        $('#current-score-counter').text(userTotalScore);
        console.log("New playerTotal= " + userTotalScore);
        playgame();
       
     })
    $('.green').on ('click',function(){
      
        userTotalScore +=num4;
        $('#current-score-counter').text(userTotalScore);
        console.log("New playerTotal= " + userTotalScore);
        playgame();
        
        
        
    })
})
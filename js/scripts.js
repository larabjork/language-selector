$(document).ready(function (){
  $("form#quiz").submit(function(event)
  {
    event.preventDefault();


  var question1 = $("input:radio[name=q1]:checked").val();
  var question2 = $("input:radio[name=q2]:checked").val();
  var question3 = $("input:radio[name=q3]:checked").val();
  var question4 = $("input:radio[name=q4]:checked").val();
  var question5 = $("input:radio[name=q5]:checked").val();

  if (question1 === "Elegant layout; aesthetics are really important to me.") {
          $(".answer").show();
          $("#python").show();
          $("#sql").hide();
          $("#scala").hide();
          $("#unclear").hide();
        // } else if (selection === "Snakes"){
        //   $(".snake").show();
        //   $(".turtle").hide();
        //   $(".insect").hide();
        } else {
          $(".answer").show();
          $("#python").hide();
          $("#sql").show();
          $("#scala").show();
          $("#unclear").hide();
        }

});








});

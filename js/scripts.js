$(document).ready(function (){
  $("form#quiz").submit(function(event)
  {
    event.preventDefault();


  var question1 = $("input:radio[name=q1]:checked").val();
  var question2 = $("input:radio[name=q2]:checked").val();
  var question3 = $("input:radio[name=q3]:checked").val();
  var question4 = $("input:radio[name=q4]:checked").val();
  var question5 = $("input:radio[name=q5]:checked").val();

    $(".quizQuestions").toggle();
    $(".answer").toggle();

  if (question2 === "extrovert" | question4 === "extrovert") {
          $(".answer").show();
          $("#python").show();
          $("#sql").hide();
          $("#scala").hide();
          $("#unclear").hide();
        } else if (question1 === "conventional" && question3 === "conventional"){
          $(".answer").show();
          $("#python").hide();
          $("#sql").show();
          $("#scala").hide();
          $("#unclear").hide();
        } else if (question5 === "balance"){
          $(".answer").show();
          $("#python").hide();
          $("#sql").show();
          $("#scala").hide();
          $("#unclear").hide();
        } else {
          $(".answer").show();
          $("#python").hide();
          $("#sql").hide();
          $("#scala").hide();
          $("#unclear").show();
        }

  // if (question2 === "startup") {
  //         $(".answer").show();
  //         $("#python").show();
  //         $("#sql").hide();
  //         $("#scala").hide();
  //         $("#unclear").hide();
  //       } else if (question2 === "established"){
  //         $(".answer").show();
  //         $("#python").hide();
  //         $("#sql").show();
  //         $("#scala").hide();
  //         $("#unclear").hide();
  //       } else {
  //         $(".answer").show();
  //         $("#python").hide();
  //         $("#sql").hide();
  //         $("#scala").show();
  //         $("#unclear").hide();
  //       }


});








});

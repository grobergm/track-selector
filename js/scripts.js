
$(document).ready(function(){
  $("#startButton").click(function(){
    $(".card").hide();
  });

  $("#nameButton").click(function(){
    var name= $("input#userName").val();
    if (!name){
      $("input#userName").addClass("is-invalid")
    }
    if(name){
      $(".nameGoesHere").text(name);
      $('#nameModal').modal('hide');
      $('#firstModal').modal('show');
    }
  })

  $("#designButton").click(function(){
    var answer= $("select#cssQuest").val();
    if (answer==="front"){
      $("#cssCard").show();
    } else if (answer==="back"){
      $('#secondModal').modal('show');
    }
  });

  $("#phpButton").click(function(){
    var answer= $("select#sizeQuest").val();
    if (answer==="small"){
      $("#phpCard").show();
    } else if (answer==="big"){
      $('#thirdModal').modal('show');
    }
  });

  $("#javaButton").click(function(){
    var answer= $("select#platformQuest").val();
    if (answer==="mobile"){
      $("#javaCard").show();
    } else if (answer==="computer"){
      $('#fourthModal').modal('show');
    }
  });

  $("#cButton").click(function(){
    var answer= $("select#userQuest").val();
    if (answer==="business"){
      $("#cCard").show();
    } else if (answer==="people"){
      $("#rubyCard").show();
    }
  });

})

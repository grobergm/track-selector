
$(document).ready(function(){
  $("#startButton").click(function(){
    $(".card").hide();
  });

  $("#nameButton").click(function(){
    var userName= $("input#userName").val();
    if (!userName){
      $("input#userName").addClass("is-invalid")
    }
    if(userName){
      $(".nameGoesHere").text(userName);
      $('#nameModal').modal('hide');
      $('#firstModal').modal('show');
    }
  })

  $("#designButton").click(function(){
    var cssAnswer = $("select#cssQuest").val();
    if (cssAnswer === "front"){
      $("#cssCard").show();
    } else if (cssAnswer==="back"){
      $('#secondModal').modal('show');
    }
  });

  $("#phpButton").click(function(){
    var phpAnswer= $("select#sizeQuest").val();
    if (phpAnswer==="small"){
      $("#phpCard").show();
    } else if (phpAnswer==="big"){
      $('#thirdModal').modal('show');
    }
  });

  $("#javaButton").click(function(){
    var javaAnswer= $("select#platformQuest").val();
    if (javaAnswer==="mobile"){
      $("#javaCard").show();
    } else if (javaAnswer==="computer"){
      $('#fourthModal').modal('show');
    }
  });

  $("#cButton").click(function(){
    var rubyAnswer= $("select#userQuest").val();
    if (rubyAnswer==="business"){
      $("#cCard").show();
    } else if (rubyAnswer==="people"){
      $("#rubyCard").show();
    }
  });

})

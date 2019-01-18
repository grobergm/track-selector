
function trackSuggestor(design,size,platform,user){
  if (design==="front"){
    return "css";
  } else {
    if (size==="small"){
      return "php";
    } else if (platform==="mobile"){
        return "java";
    } else {
        if (user==="buisiness"){
          return "c"
        } else {
            return "ruby";
          }
      }
  }
}


$(document).ready(function(){

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

  $("form#trackForm").submit(function(event){
    event.preventDefault();
    var nameInput= $("input#userName").val();

    var designInput = $("select#cssQuest").val();
    var sizeInput = $("select#sizeQuest").val();
    var platformInput = $("select#platformQuest").val();
    var userInput = $("select#userQuest").val();

    var result = trackSuggestor(designInput,sizeInput,platformInput,userInput);
    $("#inputedName").text(name);
    $("#submitMessage").show();
    $(`#${result}Card`).slideDown(4000);
  })
})

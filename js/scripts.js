
$(document).ready(function(){
  $("form#trackForm").submit(function(event){
    event.preventDefault();
    var name= $("#userName").val();
    $("#inputedName").text(name);
    $("#submitMessage").show();

    var frontScore = $("select#creative").val();
    console.log(frontScore);
    if (frontScore > 0){
      $(".card#frontEndCard").slideDown(2000);
    }
  })
})

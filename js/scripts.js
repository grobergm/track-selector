
$(document).ready(function(){
  $("form#trackForm").submit(function(event){
    event.preventDefault();
    var name= $("#userName").val();
    $("#inputedName").text(name);
    $("#submitMessage").show();
  })
})

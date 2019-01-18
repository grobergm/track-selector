
function trackSuggestor(design,user,platform,size){
  if (design==="front"){
    return "css";
  } else {
    if (size==="small"){
      return "php";
    } else if (platform==="mobile"){
        return "java";
    } else {
        if (user==="buisiness"){
          return "c#"
        } else {
            return "ruby";
          }
      }
  }
}


$(document).ready(function(){
  $("form#trackForm").submit(function(event){
    event.preventDefault();
    var name= $("#userName").val();
    $("#inputedName").text(name);
    $("#submitMessage").show();

    var creativeVal = $("select#creative").val();
    console.log(frontScore);
    if (frontScore > 0){
      $(".card#frontEndCard").slideDown(2000);
    }
  })
})

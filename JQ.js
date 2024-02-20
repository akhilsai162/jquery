// $(document).ready(function(){
//     $("button").click(function(){
//         $("#jqlogo").fadeToggle();
//     })
// })

// function func1() {
//   $("#jqlogo").fadeToggle();
// }

function func1() {
  // jQuery synatx                  === Javascript syntax
  // $(element name).action() === document.getElementByName(element name)
  //   $("div").css("background-color", "orange");
  //   $("#p1").css("font-style", "italic");
  //   $(".para").css("font-style", "italic");
  // $("#div1,#div3").css("background-color","green");
  //   $("#div1, li").css("background-color", "purple");
  //   $("div > p").fadeToggle();
  //   $("p:first").fadeToggle(); Here the action will applicable to only "first paragraph" in the html document.
  $("li:even").fadeToggle();
  $("li:odd").fadeToggle();
}

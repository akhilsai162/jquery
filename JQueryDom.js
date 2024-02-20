$(document).ready(function () {
  //   $(".div1").click(function () {
  //     var x = $(".p1").html(); //Here we are trying to acces the content of paragraph element in the html document.
  //     $("#span1").text(x); //and stored in a variable and trying to display in the span tag.
  //   });
  /*$(".div1").click(function () {
    alert($(".p1").html());
    alert($(".p1").text());
  });

  //accessing id of any html element and if we want to change the id of that particular element as follows:

  //   $(".div1").click(function () {
  //     $(".p1").attr("id", "idp2"); // changing the id value of the paragraph element as "idp2" by clicking on the button.
  //   });
  //   $(".p1").click(function () {
  //     alert($(".p1").attr("id"));
  //   });
  // });

  // accessing css properties of an html element and if we want to change those properties as follows:

  $("#btn1").click(function () {
    $(".div1").css("background-color", "green");
  });
  $(".div1").click(function () {
    alert($(".div1").css("background-color"));
  });*/

  //   adding/appending an element inside the particular html element.

  //   $("#btn1").click(function () {
  //     $(".div1").append("<p>This is box 2</p>");
  //   });

  $("#btn1").click(function () {
    $(".div1").append(
      "<img src='images/js_image.png' height='100px' width='100px'/>"
    );
  });

  $("#btn2").click(function () {
    $(".div1").prepend("<p>This is box 2 using prepend</p>");
  });

  //   adding/appending an element before the particular html element.

  $("#btn3").click(function () {
    $(".div1").before("<p>This is a paragraph using before method.</p>");
  });
  $("#btn4").click(function () {
    $(".div1").after("<p>This is a paragraph using after method.</p>");
  });

  //   removing the particular element in the html document.

  $("#btn5").click(function () {
    $(".div1").remove();
  });
  $("#btn6").click(function () {
    //the difference between the remove and empty is: by using remove method-
    $(".div1").empty(); // the total html elemet will be deleted and by using empty method only
  }); // the content present inside the html element will be deleted.
});

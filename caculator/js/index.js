var clear = true;
var inputVal = "";
var result = "";
$(document).ready(function () {
  $(".btn").click(function () {
    var clickedText = $(this).attr("value");
    if (
    clickedText == parseFloat(clickedText, 10) ||
    clickedText === "." ||
    clickedText === "/" ||
    clickedText === "*" ||
    clickedText === "-" ||
    clickedText === "+")
    {
      if (clear) {
        inputVal = clickedText;
        $(".display").val(inputVal);
        clear = false;
      } else {
        inputVal += clickedText;
        $(".display").val(inputVal);
      }
    }
    switch (clickedText) {
      case "my caculator":
        inputVal = clickedText;
        $(".display").val(inputVal);
        break;
      case "c":
        inputVal = "";
        $(".display").val(inputVal);
        break;
      case "=":
        result = eval(inputVal);
        $(".display").val(result);}

  });
});

$(document).ready(function () {
  getRandomQuote();
  $("#new-quote").click(function () {
    getRandomQuote();
    var colors = [
    "#F64747",
    "#663399",
    "#4183D7",
    "#22313F",
    "#9A12B3",
    "#03A678"];
    /* array of hex color */
    var index = colors[Math.floor(Math.random() * colors.length)];

    $("body").css("background-color", index).addClass("animate fadeIn");
    //$("#quote-box").css("background-color", index);
    $("#tweet-quote").css("background-color", index);
    $("#new-quote").css("background-color", index);
  });
  $("#tweet-quote").click(function () {
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?  text=" +
    holiday.data + " " + holiday.name);
  });
});

function getRandomQuote() {
  var year = Math.floor(Math.random() * Math.floor(17)) + 2000 + 1; // // random number between 2001 to 2017
  var month = Math.floor(Math.random() * Math.floor(12)) + 1; // random number between 1 and 12
  var date = Math.floor(Math.random() * Math.floor(30)) + 1; // random number between 1 and 30
  var url = "https://holidayapi.com/v1/holidays?key=a373359d-8ad7-4c7a-bed5-89de89eeadfc&country=US",
  url = url + "&year=" + year + "&month=" + month + "&date=" + date;

  return $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: function success(data) {
      console.log(data);
      var holidays = data.holidays;
      if (holidays.length === 0) {
        $("#text").text("No holidays");
      } else {
        var holiday = holidays[0];
        $("#text").text(holiday.date + " is:");
        $("#author").text("--" + holiday.name);
      }
      //var quote=data.quote;
      //var author=data.author;
      //$('#text').text(quote);
      //$('#author').text("--"+author);
    },
    error: function error(err) {
      $("#text").text("Oops something went wrong.");
    } });

}

/** ajax function which make api call to random-holiday-api **/

$(document).ready(function () {

  $("#btnLength").click(function () {
    $("#coolNameFactsOutput").html();

    let userName = $("#userName").val();

    $("#coolNameFactsOutput").html(nameLength(userName));
  });

  $("#btnAnimal").click(function () {
    $("#coolReverse").html();

    let userName = $("#userName").val();

    $("#coolReverse").html(reverse(userName));
  });
});



function nameLength(name) {
  return "Your name is " + name.length + " letters long!";
}

function reverse(x) {
    return "Reversed: "+ x.split("").reverse().join("");
}


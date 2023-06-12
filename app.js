$(document).ready(function() {
  var tableData = [
    { name: "John", age: 25, city: "New York" },
    { name: "Emma", age: 30, city: "London" },
    { name: "Michael", age: 35, city: "Paris" }
  ];

  var table = $("<table>").css({
    "border": "1px solid black",
    "table-layout": "fixed"  // Set table layout to fixed
  });

  var tableHeader = $("<tr>").appendTo(table);
  $("<th>").text("Name").css("border", "1px solid white").appendTo(tableHeader);
  $("<th>").text("Age").css("border", "1px solid white").appendTo(tableHeader);
  $("<th>").text("City").css("border", "1px solid white").appendTo(tableHeader);

  $.each(tableData, function(index, data) {
    var tableRow = $("<tr>").appendTo(table);
    $("<td>").text(data.name).css("border", "1px solid white").appendTo(tableRow);
    $("<td>").text(data.age).css("border", "1px solid white").appendTo(tableRow);
    $("<td>").text(data.city).css("border", "1px solid white").appendTo(tableRow);
  });

  $("#container").append(table);
});

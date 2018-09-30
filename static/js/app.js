// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// data.forEach((data) => {
    //var row = tbody.append("tr");

var submit = d3.select("#filter-btn");

function BuildTable(tableData) {
    //d3.event.preventDefault();
    
    // var datetime = data.values(datetime);
    // var city = data.values(city);
    // var state = data.values(state);
    // var country = data.values(country);
    // var shape = data.values(shape);
    // var duration = data.values(duration);
    // var comments = data.values(comments);
    
    tableData.forEach(Value => {
       var row = tbody.append("tr");
       Object.entries(Value).forEach(([key, value]) => {
           var cell = tbody.append("td");
           cell.text(value);
  });
  });
  }

//submit.on("click", function(BuildTable) {
//   d3.event.preventDefault();
  
//   var datetime = data.values(datetime);
//   var city = data.values(city);
//   var state = data.values(state);
//   var country = data.values(country);
//   var shape = data.values(shape);
//   var duration = data.values(duration);
//   var comments = data.values(comments);
  
//   data.forEach((tableData) => {
//      var row = tbody.append("tr");
//      Object.entries(tableData).forEach(([key, value]) => {
//          var cell = tbody.append("td");
//          cell.text(value);
// });
// });
// })
BuildTable(tableData);
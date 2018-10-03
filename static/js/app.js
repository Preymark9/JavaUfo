// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function BuildTable(tableData) {
    tableData.forEach(Value => {
       var row = tbody.append("tr");
       Object.entries(Value).forEach(([key, value]) => {
           var cell = tbody.append("td");
           cell.text(value);
  });
  });
  }
//What I did above was make a function to load the table into the webpage. This was a bit more difficult than I expected. Rob helped a lot. 
//next goal is to make a successful filter. 
var submit = d3.select("#filter-btn");

submit.on("click", function(filter) {
   d3.event.preventDefault();
  
   var inputElement = d3.select("#datetime");

   var inputValue = inputElement.property("value");

   var filteredData = tableData.filter(date => date.datetime === inputValue);

   var mapper = filteredData.map(date => date.datetime);
   //I forgot to map my filter. Problem is now I have to redefine my variables a little
   
   var datetime = filteredData.values(datetime);
   var city = filteredData.values(city);
   var state = filteredData.values(state);
   var country = filteredData.values(country);
   var shape = filteredData.values(shape);
   var duration = filteredData.values(duration);
   var comments = filteredData.values(comments);
     
   d3.select(".table table-striped")
    .append("li").text(`datetime: ${datetime}`)
    .append("li").text(`city: ${city}`)
    .append("li").text(`state: ${state}`)
    .append("li").text(`country: ${country}`)
    .append("li").text(`shape: ${shape}`)
    .append("li").text(`duration:${duration}`)
    .append("li").text(`comments:${comments}`);
});
//I'm pretty sure I built the function for filtering right, but it isn't working in practice, not sure why. 
//theory is that it's the var filteredData
BuildTable(tableData);
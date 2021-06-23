// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select(".btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {
    
    d3.event.preventDefault();
  
    var inputElement = d3.select("#datetime");
  
    var inputValue = inputElement.property("value");
  
    console.log("input = ", inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    
    console.log(filteredData);

    var tbody = d3.select("tbody");
    
    tbody.html("");
    
    filteredData.forEach(function(ufoReport){
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]){
          console.log(key, value);
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
   
  }
  
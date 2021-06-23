// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select(".btn");
var form = d3.select("#datetime");
//var inputField = d3.select("#datetime");

button.on("click", runEnter);
//form.on("submit", runEnter);
form.on("change", runEnter);
//inputField.on("change",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log("input = ", inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    
    console.log(filteredData);

   // var dateTime = filteredData.map(ufo => ufo.datetime);
   // console.log("date:", dateTime);
    //var city = filteredData.map(ufo => ufo.city);
   // var state = filteredData.map(ufo => ufo.state);
   // var country = filteredData.map(ufo => ufo.country);
   // var shape = filteredData.map(ufo => ufo.shape);
   // var comments = filteredData.map(ufo => ufo.comments);

    var tbody = d3.select("tbody");

    filteredData.forEach(function(ufoReport){
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]){
          //console.log(key, value);
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
    //list.html("");

    //list.append("li").text(`${dateTime}`);
    //list.append("li").text(`${city}`);
    //list.append("li").text(`${state}`);
    //list.append("li").text(`${country}`);
    //list.append("li").text(`${shape}`);
    //list.append("li").text(`${comments}`);
  }
  
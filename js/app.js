// import the data
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// build a function to loop through the data and add it's contents to a table
fucntion buildTable(data) {
    // clear the data  If we didn't clear existing data first, then we would find ourselves reinserting
    // data that already exists, thus creating duplicates and making a bit of a mess. 
    // It's good practice to clear the existing data first to give ourselves a clean slate to work with.
    tbody.html("");

    // write a forEach function to loop through the data
    data.forEach((dataRow) => {
        // create a variable to append a row to the table
        let row = tbody.append("tr");
        // tell our code put each sighting onto its own row of data
        // Loop through each field in the dataRow and add
        Object.values(dataRow).forEach((val) => {
            // create a variable to append data to a table
            let cell = row.append("td");
            // add each value as a table cell (td)
            cell.text(val);
        });
    });
}
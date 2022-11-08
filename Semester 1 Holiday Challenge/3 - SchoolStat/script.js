
  function sortTable(tableClass, n) {
    let table = document.getElementsByClassName(tableClass)[0];
    let rows, switching, i, a, b, shouldSwitch, dir, switchcount = 0;
    
    switching = true;
    dir = "ascending";
    
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("tr");
      
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        a = rows[i].getElementsByTagName("td")[n];
        b = rows[i + 1].getElementsByTagName("td")[n];
        
        if (dir == "ascending") {
          if (a.innerText.localeCompare(b.innerText, undefined, {numeric: true}) > 0) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "descending") {
          if (a.innerText.localeCompare(b.innerText, undefined, {numeric: true}) < 0) {
            shouldSwitch = true;
            break;
          }
        } 
      }    
      
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "ascending") {
          dir = "descending";
          switching = true;
        }
      }
    }
    //Change sortable symbol based on sort direction
    let col = document.querySelectorAll("th i")
    // let cols = Array.from(col)
    // let colSymbol = cols.filter(item => item.className != "")
    col.forEach( i => {if (i.className != "") {i.className = 'bx bxs-sort-alt'}})

    if (dir == "ascending") {
      table.querySelectorAll("i")[n].className = 'bx bx-caret-up'
    } else if (dir == "descending") {      
      table.querySelectorAll("i")[n].className = 'bx bx-caret-down'
    }
  }
  

//Add event handlers for sortable columns
document.querySelectorAll('.table-1 th')[0].addEventListener('click', () => {sortTable('table-1', 0);})
document.querySelectorAll('.table-1 th')[1].addEventListener('click', () => {sortTable('table-1', 1);})
document.querySelectorAll('.table-1 th')[2].addEventListener('click', () => {sortTable('table-1', 2);})
document.querySelectorAll('.table-2 th')[1].addEventListener('click', () => {sortTable('table-2', 1);})
document.querySelectorAll('.table-3 th')[1].addEventListener('click', () => {sortTable('table-3', 1);})
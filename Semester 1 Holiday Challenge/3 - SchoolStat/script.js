
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
  }

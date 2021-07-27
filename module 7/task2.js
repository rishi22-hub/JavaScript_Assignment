// var p=document.querySelectorAll("#change");
// var q=document.getElementById("tab");
// // var r = td.cellIndex;
// // var c = td.parentNode.rowIndex;
// function changecolor(r,c){
    
//     if(p[r+c].style.backgroundcolor=="red")p[r+c].style.backgroundcolor="white";
//     else p[r+c].style.backgroundcolor="red";
// }
// //p[r+c].changecolor(r,c);
// col = q.cellIndex,
// row = q.parentNode.rowIndex;
// q.addEventListener("click",changecolor(row,col),false);



var table = document.getElementById("tab");
    var cells = table.getElementsByTagName('td');
    var totalrows=table.getElementsByTagName('tr');
    var columnsize=cells/totalrows;
    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
       
        cell.onclick = function () {
           
            var rowId = this.parentNode.rowIndex;

            var rc=this.cellIndex;
            
            var rowSelected = table.getElementsByTagName('td')[rowId*3+rc];
           
            console.log(rowSelected.length);
            var x=rowSelected.style.backgroundColor;
            if(x!=="red")rowSelected.style.backgroundColor = "red";
            else rowSelected.style.backgroundColor="white";
           

            
        }
    }
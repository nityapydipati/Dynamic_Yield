
//collecting tiles from the website displayed
var tiles = document.getElementsByClassName('tile')
//converting it into an arraylist so as to parse through
var tile_list = Array.prototype.slice.call(tiles)
for(var i =0; i<tile_list.length; i++){
//go to the children of each tile and select item at index 4 which is of class "price" and retrieving the innerText will get the price. Remove the 
//dollar sign and convert into a number to compare 
if(Number(tile_list[i].children[5].innerText.replace("$",""))>100){
//if price is greater than 100 then display nothing else leave them
  tile_list[i].style.display="none"
}
//once done with the operation print to let user know!
console.log("done!")
}
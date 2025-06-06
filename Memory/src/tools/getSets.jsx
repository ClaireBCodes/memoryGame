//Grab "count" random differernt pairs of tiles from the "table"
export function getSets(table, count) {
  const setsPicked = [];
  const workingTable = [...table]; // Create a copy of the table to avoid modifying the original  
  for (let i = 0; i < count; i++) {
    let getIndex = Math.floor(Math.random() * workingTable.length);
    setsPicked.push(workingTable[getIndex]);
    workingTable.splice(getIndex, 1);
  }
  // console.log("sets generated:", setsPicked);
  return setsPicked;
}
//returns an array of objects the size of count
// Each object is a random pair of tiles from the table
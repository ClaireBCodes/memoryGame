//takes in an array of sets and two indices, returns an array of pairs
//indices give the tile types to be paired


//NO LONGER NEEDED
export function pickPairs(sets, index1, index2) {
  let pairs = [];
  for (let i = 0; i < sets.length; i++) {
    pairs.push([sets[i][index1], sets[i][index2]]);
  }
  console.log("Pairs generated:", pairs);
  return pairs;
}

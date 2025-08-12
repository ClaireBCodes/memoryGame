//no longer used?


import _ from 'lodash';

export function shuffleCards(cards1, cards2) {


  let fullSize = _.concat(cards1, cards2); //lodash concat to duplicate the array
  let shuffledList = _.shuffle(fullSize); //lodash shuffle to randomize the order
  // console.log("Shuffled cards:", shuffledList);
  return shuffledList;

}

// should return [{{},i, 0, 0}, etc ...] the size of the board


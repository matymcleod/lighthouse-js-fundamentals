const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
  let pos = [0,0]; //pos = [x, y]
  for(let dir of moves){ //dir cycles each item of moves and stops at final array item
  switch (dir){ //if dir is = to 'north' then y position moves 1 (up) or if dir is = to 'east then x moves 1(left)
  case 'north':
    pos[1] += 1;
    break;
  case 'south':
    pos[1] -= 1;
    break;
  case 'east':
    pos[0] += 1;
    break;
  case 'west':
    pos[0] -= 1;
    break;
    }
  } return pos; //when finished, dir is returned to the console
}
finalPosition(moves); //call this function to execute this program

//---------- OR ----------
/*
if(pos[1] === 'north'){
    dir += 1;
}
*/
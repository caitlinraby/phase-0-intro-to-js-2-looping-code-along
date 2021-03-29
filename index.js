const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts); 

let name = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(name, event = "surprise") {
  let newArray = [];
  for (let i = 0; i < name.length; i++) {
    newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    
  }

  return newArray;
}

writeCards('name', 'event');

function countDown(n1) {
  while (n1 >= 0) {
    console.log(n1--);
  }
}
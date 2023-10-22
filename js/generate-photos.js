import { generateRandomComment } from './generate-comment.js';
import { getRandomNumber } from './functions.js';

function generatePhoto(id){
  return{
    id,
    url: `photos/${id}.jpg`,
    description: `Описание фото №${id}`,
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(0,30)}, generateRandomComment)
  };
}

const photos = Array.from({length : 25}, (_, index) => generatePhoto(index+1));
console.log(photos);

export {generatePhoto};

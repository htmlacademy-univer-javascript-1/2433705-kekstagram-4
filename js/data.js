import{generateUniqueID} from './util.js';
import { getRandomNumber } from './util.js';

function generateRandomComment(){
  const commentsList = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', ];
  const names = ['Анна', 'Иван', 'Елена', 'Максим', 'Ольга', 'Павел', 'Алексей', 'Екатерина', 'Мария'];
  return {
    id: generateUniqueID(),
    avatar:`img/avatar-${getRandomNumber(1, 6)}.svg`,
    message:commentsList[getRandomNumber(0, commentsList.length-1)],
    name: names[getRandomNumber(0, names.length-1)],
  };
}

function generatePhoto(id){
  return{
    id,
    url: `photos/${id}.jpg`,
    description: `Описание фото №${id}`,
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(0,30)}, generateRandomComment)
  };
}

export{generatePhoto};



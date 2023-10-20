const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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

const usedIDs = new Set();

function generateUniqueID() {
  let id;
  do {
    id = getRandomNumber(1, 1000);
  } while (usedIDs.has(id));
  usedIDs.add(id);
  return id;
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

const photos = Array.from({length : 25}, (_, index) => generatePhoto(index+1));



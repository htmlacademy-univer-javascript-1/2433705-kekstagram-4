export{generateUniqueID};

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
export{getRandomNumber};

const usedIDs = new Set();

function generateUniqueID() {
  let id;
  do {
    id = getRandomNumber(1, 1000);
  } while (usedIDs.has(id));
  usedIDs.add(id);
  return id;
}

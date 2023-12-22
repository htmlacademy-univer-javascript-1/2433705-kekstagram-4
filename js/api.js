const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';
const Path = {
  GET_DATA: '/data',
  SEND_DATA: '',
};

const Methods = {
  GET : 'GET',
  POST : 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const load = (path, errorText, method = Methods.GET, body = null) =>
  fetch(`${BASE_URL}${path}`, {method, body})
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Path.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => load(Path.SEND_DATA, ErrorText.SEND_DATA, Methods.POST, body);

export {getData, sendData};

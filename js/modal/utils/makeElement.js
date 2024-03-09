// создает список с нужными комментариями

const makeElements = (element) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  const newImage = document.createElement('img');
  newImage.classList.add('social__picture');
  newImage.src = element.avatar;
  newImage.alt = element.name;
  newImage.style.width = '35px';
  newImage.style.height = '35px';
  newComment.append(newImage);
  const newText = document.createElement('p');
  newText.classList.add('social__text');
  newText.textContent = element.message;
  newComment.append(newText);
  return newComment;
};

export {makeElements};

const getCommentData = (id, func) => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((posts) => {
      func(posts[id].comments);
    });
};

export {getCommentData};

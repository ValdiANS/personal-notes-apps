const createNoteObject = (enteredTitle = '', enteredBody = '') => ({
  id: +new Date(),
  title: enteredTitle,
  body: enteredBody,
  archived: false,
  createdAt: new Date().toISOString(),
});

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const hideBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

const showBodyScroll = () => {
  document.body.style.overflow = '';
};

export { createNoteObject, showFormattedDate, hideBodyScroll, showBodyScroll };

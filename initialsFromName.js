let createInitialsFromName = (name) => {
  let words = name.split(' ');
  let initials = '';

  if (words.length === 1) {
    initials = words[0].substring(0, 2).toUpperCase();
  } else if (words.length === 2) {
    initials = words[0][0].toUpperCase() + words[1][0].toUpperCase();
  } else {
    initials = words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase();
  }
  return initials;
}
module.exports = createInitialsFromName;

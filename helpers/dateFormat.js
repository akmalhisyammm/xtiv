const dateToLocaleString = (date) => {
  return new Date(date).toLocaleString('id-ID', {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

module.exports = { dateToLocaleString };
module.exports = () => {
  if(process.env.NODE_ENV === 'development') {
    console.log = function () {}
  }
};
export const convertToK = (num) => {
  if (num % 1000 > 100) {
    return 99;
  } else {
    return (num % 1000).toFixed(1);
  }
};

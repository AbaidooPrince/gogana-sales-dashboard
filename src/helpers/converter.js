export const convertToK = (num) => {
  if (num % 1000 > 100) {
    return 99;
  } else {
    return (num % 1000).toFixed(1);
  }
};

export const convertToBar = (num) => {
  const toK = convertToK(num);
  if (toK === 99) {
    return "h-full";
  } else if (toK > 0 && toK <= 10) {
    return "h-4";
  } else if (toK > 10 && toK <= 20) {
    return "h-1/5";
  } else if (toK > 20 && toK <= 50) {
    return "h-2/5";
  }
  return "h-3/5";
};

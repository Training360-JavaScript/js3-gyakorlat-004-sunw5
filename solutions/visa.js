// const checkVisa = (visaNumber) => {
//   // const num = visaNumber.replaceAll(" ", "");
//   return /^4\d{15}$/.test(visaNumber);
// };

// export default checkVisa;
const checkVisa = (visaNumber) => {
  const num = visaNumber.replaceAll(" ", "");
  return /^4\d{15}$/.test(num);
};

export default checkVisa;

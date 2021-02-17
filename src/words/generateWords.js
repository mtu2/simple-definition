import data from "./data.json";

const arrayData = Object.entries(data);
const filteredData = arrayData
  .filter((el) => {
    return (
      el[1].hasOwnProperty("definitions") &&
      el[1].definitions.length > 2 &&
      el[1].hasOwnProperty("pronunciation")
    );
  })
  .filter((el) => {
    let exampleNum = 0;
    for (let def of el[1].definitions) {
      if (def.hasOwnProperty("examples")) exampleNum++;
    }
    return exampleNum >= 2;
  });

const generateRandomWord = () => {
  const randomKey = Math.floor(Math.random() * filteredData.length);
  console.log(filteredData[randomKey]);
  return filteredData[randomKey];
};

export default generateRandomWord;

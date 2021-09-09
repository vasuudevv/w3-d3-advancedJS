const fetch = require("cross-fetch");

console.log("Question 3");

const result = async () => {
  try {
    const res = await fetch("http://api.nobelprize.org/v1/prize.json");
    // console.log(res);
    if (res.status != 200) {
      throw new Error(`Error Code:  ${res.status}. Try again`);
    } else {
      const prizes = await res.json();
      //   console.log(prizes);
      prizes.prizes.forEach((prize) => {
        if (
          prize.year >= 2000 &&
          prize.year <= 2019 &&
          prize.category === "chemistry"
        ) {
          console.log(`\nYear: ${prize.year}`);
          prize.laureates.forEach((laureate) => {
            console.log(`${laureate.firstname} ${laureate.surname}`);
          });
        }
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

result();

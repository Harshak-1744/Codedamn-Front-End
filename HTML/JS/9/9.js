/* Currency Converter  from USD to INR */


async function convertCurrency() {
  try {
    let amount = document.getElementById("amount").value;
    const From_Currency = `USD`;
    const To_Currency = `INR`;

    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${From_Currency}&to=${To_Currency}&amount=${amount}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bb809bbd49msh28b9b76fb03074ep14045fjsn37c3992cbaf4',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    document.getElementById("result").innerHTML = `Result: ${data.result} in INR`;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

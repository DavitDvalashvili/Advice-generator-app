const dice = document.querySelector('.button');
const idNumber = document.querySelector('#advice-id');
const quotes = document.querySelector('.advice-text');

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    quotes.innerText = data.slip.advice;
    idNumber.innerText = data.slip.id;

}

dice.addEventListener("click", getAdvice);



// const getAdvice = async () => {
//     try {
//         const response = await axios.get('https://api.adviceslip.com/advice');
//         quotes.innerText = response.data.slip.advice;
//         idNumber.innerText = response.data.slip.id;
//     } catch (error) {
//         console.log(Error);
//     }
// }

// dice.addEventListener("click", getAdvice);

const billValue = document.querySelector('.bill-value')
const amountPaid = document.querySelector('.amount-paid')
//Start Random Generation Section

const getRandomInt = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
const changeQuestion = (billValue, amountPaid) => {

    const randomBillValue = getRandomInt(1, 10_000)
    const randomAmountPaid = getRandomInt(randomBillValue, randomBillValue + 1_000)

    billValue.innerHTML = randomBillValue;
    amountPaid.innerHTML = randomAmountPaid;
}
changeQuestion(billValue, amountPaid);

// End Random Generation Section.


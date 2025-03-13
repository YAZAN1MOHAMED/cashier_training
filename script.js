
const billValue = document.querySelector('.bill-value')
const amountPaid = document.querySelector('.amount-paid')
const answerInput = document.querySelector('.answer-input')
const submitButton = document.querySelector('.submit-button')
const answerForm = document.querySelector('#answer-form')


//Start Random Generation Section

const getRandomInt = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
const changeQuestion = (billValueElement, amountPaidElement) => {

    const randomBillValue = getRandomInt(1, 10_000)
    const randomAmountPaid = getRandomInt(randomBillValue, randomBillValue + 1_000)

    billValueElement.innerHTML = randomBillValue;
    amountPaidElement.innerHTML = randomAmountPaid;
}
changeQuestion(billValue, amountPaid);

// End Random Generation Section.

// Start calculation Section
answerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAnswer(billValue, amountPaid, answerInput.value)
})

const wrongAnswer = (correctValue) => {

    const wrongAnswer = document.querySelector('.wrong-answer');
    wrongAnswer.innerHTML = `The answer is wrong ❌ the correct answer is : ${correctValue}`
    const correctAnswer = document.querySelector('.correct-answer');
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide');
}
const correctAnswer = () => {
    const wrongAnswer = document.querySelector('.wrong-answer');
    const correctAnswer = document.querySelector('.correct-answer')
    wrongAnswer.classList.add('hide')
    correctAnswer.classList.remove('hide');
}
const checkAnswer = (billValueElement, amountPaidElement, inputValue) => {
    const change = amountPaidElement.innerHTML - billValueElement.innerHTML;
    const isAnswerTrue = change == inputValue;
    if (isAnswerTrue) {
        correctAnswer()
    }
    else wrongAnswer(change);
    changeQuestion(billValueElement, amountPaidElement)
}
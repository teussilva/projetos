let feedbackToUser = document.getElementById('feedback-to-user').children[0]
let mensageFeedbackUser = document.getElementById('mensage-feedback-user')
let porcetage = document.getElementById('porcentage')
function getFinalAnswer(text, answerCorrect, points){
  feedbackToUser.textContent = ''
  let counter_FinalAswer;
  if(text.includes(answerCorrect) && points === 25){
     counter_FinalAswer = 1
     console.log(feedbackToUser.textContent = counter_FinalAswer)
     console.log(mensageFeedbackUser.textContent = 'Você, conhece pouco sobre o matheus!')
     console.log(porcetage.textContent = '25' + '%')
  }else if(text.includes(answerCorrect) && points === 50){
    counter_FinalAswer = 2
    console.log(feedbackToUser.textContent = counter_FinalAswer)
    console.log(mensageFeedbackUser.textContent = 'Você, conhece pouco sobre o matheus!')
    console.log(porcetage.textContent = '50' + '%')
  }else if(text.includes(answerCorrect) && points === 75){
    counter_FinalAswer = 3
    console.log(feedbackToUser.textContent = counter_FinalAswer)
    console.log(mensageFeedbackUser.textContent = 'Você, conhece pouco sobre o matheus!')
    console.log(porcetage.textContent = '75' + '%')
  }else if(text.includes(answerCorrect) && points === 100){
    counter_FinalAswer = 4
    console.log(feedbackToUser.textContent = counter_FinalAswer)
    console.log(mensageFeedbackUser.textContent = 'Parabéns, você conhece muito o matheus')
    console.log(porcetage.textContent = '100' + '%')
  }else{
    counter_FinalAswer = 0
    console.log(feedbackToUser.textContent = counter_FinalAswer)
    console.log(mensageFeedbackUser.textContent = 'Oops, você não conhece nada sobre o matheus :(')
    console.log(porcetage.textContent = '0' + '%')
  }
}
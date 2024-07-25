let addingClassIncorrect = li =>{
  if(li.classList.value != 'correct'){
    li.classList.add('incorrect')
  }
}
let selected = answer =>{
    let textLi = answer.textContent
    let correctAnswer = aboutMeInfo[isIndex].responseCorrect
    let allLi =  quiz_Question.childNodes[5].querySelectorAll('li')
    if(textLi.includes(correctAnswer)){
       answer.classList.add('correct')
       btnNext.classList.remove('hidden-button')
       allLi.forEach(addingClassIncorrect)
       mensageDetails.textContent = 'resposta correta'
       mensageDetails.classList.add('show')
       score += 25
       getFinalAnswer(textLi, correctAnswer, score)
       return
    }
    allLi.forEach(addingClassIncorrect)
    btnNext.classList.remove('hidden-button')
    mensageDetails.textContent = 'A resposta está incorreta :('
    mensageDetails.classList.add('show')
    mensageDetails.classList.add('incorrect')
    getFinalAnswer(textLi, correctAnswer, score)
    console.log(score = 0)
  } 
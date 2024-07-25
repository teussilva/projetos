let timerQuiz = document.querySelector('.timer-question span')
let decrementTimer = (element) =>{
  if(element){
    element.textContent = ''
    element.textContent = couter_timer
    setInterval(() => {
      if(couter_timer){
        element.textContent = --couter_timer
        if(couter_timer < 10){
          element.textContent = 0  + '' + couter_timer
          if(element.textContent === '00'){
            couter_timer = 15
            element.textContent = couter_timer
            let allLi = quiz_Question.childNodes[5].childNodes[1].children
            for(let i = 0; i < allLi.length; i++){
              let getTextLi = allLi[i].textContent
              let correctAnswer = aboutMeInfo[isIndex].responseCorrect
              if(getTextLi.includes(correctAnswer)){
                allLi[i].classList.add('correct')
                btnNext.classList.remove('hidden-button')
                if(allLi[i] && btnNext){
                 couter_timer = 0
                 element.textContent ='00'
                 for(let i = 0; i < allLi.length; i++){
                  if(allLi[i].className != 'correct'){
                    allLi[i].classList.add('incorrect')
                    mensageDetails.textContent = 'resposta correta:' +' ' + correctAnswer
                    mensageDetails.classList.add('show')
                  }
                 }
                }else{
                  console.log('not exist in display')
                }
              }
            }
          }
        }else{
          return couter_timer
        }
      }
    }, 1890) // is miliseconds 1850
  }
}
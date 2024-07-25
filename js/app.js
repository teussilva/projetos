let insertValue = index =>{
    const getID = aboutMeInfo.map(ID => ID.id) 
    const getQuestion = aboutMeInfo.map(q => q.question)
    const getOption = aboutMeInfo.map(op => op.options) 
    
    let myQuestions = '<p><span>'+getID[index]+'.</span>'+getQuestion[index]+'</p>'
    let myOptions = '<li><span>A.</span>&nbsp;'+getOption[index][0]+'</li>'+
                    '<li><span>B.</span>&nbsp;'+getOption[index][1]+'</li>'+
                    '<li><span>C.</span>&nbsp;'+getOption[index][2]+'</li>'+
                    '<li><span>D.</span>&nbsp;'+getOption[index][3]+'</li>'+
                    '<li><span>E.</span>&nbsp;'+getOption[index][4]+'</li>'
    question.innerHTML += myQuestions
    responseUl.innerHTML = '' 
    responseUl.innerHTML += myOptions 


    let getAllLi = responseUl.querySelectorAll('li')
    for(let i = 0; i < getAllLi.length; i++){
        getAllLi[i].setAttribute('onClick', 'selected(this, '+index+')')
    }
}


let addClassInItem = (element, nameClass) => element.classList.add(nameClass)
let removalClassInitem = () => (element, nameClass) => element.classList.remove(nameClass)

let startQuizInQuestion = () =>{
    addClassInItem(quiz_Question, 'show') 
    returnToBtnStart() 
    quizIntro.classList.remove('show-intro')
    btnNext.classList.add('hidden-button')
    decrementTimer(timerQuiz)
}

let hiddenTextQuestion = () => question.children[0].remove()

let getNextQuestion = () =>{
   if(isIndex < aboutMeInfo.length - 1){
     insertValue(++isIndex)
     hiddenTextQuestion()
     btnNext.classList.add('hidden-button')
   }else if(isIndex === aboutMeInfo.length - 1){
     insertValue(isIndex = 0)
     hiddenTextQuestion()
     quizEnd.classList.add('show')
     quiz_Question.classList.remove('show')
     if(mensageDetails){
       mensageDetails.remove()
     }
   }

   if(mensageDetails.className === 'mensage-details show'){
     mensageDetails.classList.remove('show')
   }

   if(mensageDetails.className === 'mensage-details show incorrect'){
     mensageDetails.classList.remove('show', 'incorrect')
   }
   
   decrementTimer(timerQuiz)
   couter_timer = 16
}

let returnToBtnStart = () => removalClassInitem(quizIntro, 'show-intro')
let addClickOnStartButton = () => addClassInItem(quizIntro, 'show-intro')
let checkIndexInElement = () => insertValue(isIndex)

btnNext.addEventListener('click', getNextQuestion)
startQuizBtn.addEventListener('click', startQuizInQuestion)
btnInitial.addEventListener('click', returnToBtnStart)
btnStart.addEventListener('click', addClickOnStartButton)
window.addEventListener('DOMContentLoaded',checkIndexInElement)

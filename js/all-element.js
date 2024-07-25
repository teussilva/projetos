// Obtendo todos os elmentos que sera usado para manipular o DOM
const btnStart = document.querySelector('.start-btn')
const quizIntro = document.querySelector('.intro-quiz'),
      btnInitial = quizIntro.querySelector('.togoback-initial button'),
      startQuizBtn = quizIntro.querySelector('.initial-quiz button')
const btn_toGoBack = document.querySelector('.btn-initial button')
const quiz_Question = document.querySelector('.question-quiz')
const question = document.querySelector('.question')
const btnNext = document.querySelector('.btn-next button')
const quizEnd = document.querySelector('.end-quiz')
const rechargeBtn = document.querySelector('.btn-recharge button')
const numberOfHITS = document.querySelector('.number-of-hits p span em mark')
const responseUl = document.querySelector('.response ul')
const btnPrev = document.querySelector('.btn-prev button')
const mensageDetails = document.querySelector('.mensage-details')

let feedBackEndQuiz = document.getElementById('feedback-quiz')
let result = document.querySelector('#result-quiz')

let isIndex = 0
let score = 0
let couter_timer = 15

let checkIcon = '<div class="check-icon"><i class="fa fa-check"></i></div>'
let closeIcon = '<div class="close-icon"><i class="fa fa-close"></i></div>'
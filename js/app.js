var listOfQuestions = [{question: 'The dysphoric state of substance use disorders is fueled by hormones such as _____?', choices: ['Corticotropin releasing factor', 'Dopamine', 'Ligase', 'B12'], answer: 'Corticotropin releasing factor', type: 'normal'}, {question: 'What is the most widely used illicit drug amongst adolescents?', choices: ['Nitrous oxide', 'Marijuana', 'Cocaine', 'Heroin'], answer: 'Marijuana', type: 'normal'}, {question: 'What are the three stages of substance use disorders, in order?', choices: ['Intoxication, anticipation, and withdrawal', 'Withdrawal, intoxication, anticipation', 'Anticipation, withdrawal, intoxication', 'Intoxication, withdrawal, anticipation'], answer: 'Intoxication, withdrawal, anticipation', type: 'normal'}, {question: 'Which of the following reasons may be the reason why people start using substances?', choices: ['Peer pressure', 'Boredom', 'Curiosity', 'All of the above'], answer: 'All of the above', type: 'in order'}, {question: 'What is the active ingredient in marijuana?', choices: ['Methionine', 'THC', 'Methane', 'Dopamine'], answer: 'THC', type: 'normal'}, {question: 'What is the leading cause of preventable death in the United States?', choices: ['Alcohol use', 'Heart attacks', 'Smoking', 'Methamphetamine'], answer: 'Smoking', type: 'normal'}, {question: 'When exposed to the "high" of a substance so many times, you may start feeling anxious, excited, or agitated when you are exposed to outside stimuli that remind you of the substance. This is known as?', choices: ['Axon transfer', 'Neuron jumps', 'Classical conditioning', 'Memory recall'], answer: 'Classical conditioning', type: 'normal'}, {question: 'More than __ out of 10 teenagers mistakenly believe it is safer to use prescription drugs than illicit drugs.', choices: ['2', '3', '4', '5'], answer: '4', type: 'in order'}, {question: 'Is there a difference between substance use and substance use disorders?', choices: ['No, the terms are used interchangeably.', 'No, all people who have used a substance can be classified as having a substance use disorder.', 'Yes, substance use is a more extreme version of substance use disorders.', 'Yes, substance use disorders can be caused by substance use.'], answer: 'Yes, substance use disorders can be caused by substance use.', type: 'in order'}, {question: 'Why is substance use so harmful?', choices: ['It could lead to substance use disorders.', 'The substances can do harmful things to your own body.', 'Substance use may affect people around you.', 'All of the above'], answer: 'All of the above', type: 'in order'}, {question: 'About ____ of marijuana users in high school get D\'s and F\'s.', choices: ['Half', 'a third', 'a quarter', 'three-quarters'], answer: 'Half', type: 'normal'}, {question: 'According to the British Drug Survey of 2014, more than 80% of drug users reported that ____ was their first illicit drug that they used?', choices: ['Cocaine', 'Marijuana', 'Nitrous oxide', 'Vaping'], answer: 'Marijuana', type: 'normal'}, {question: 'According to the British Drug Survey of 2014, about __% of drug users stated that they started to use substances when they were below 18.', choices: ['27', '38', '55', '64'], answer: '64', type: 'in order'}, {question: 'Vapes contain ______, which are chemicals that may cause cancer.', choices: ['Dopamine', 'Nicotine', 'Carcinogens', 'Epinephrines'], answer: 'Carcinogens', type: 'normal'}]
var storage = [];
var questionNumber = 1;
var randomChoice = [1, 2, 3, 4];

function rearrange(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function removePreviousElementsAndCreateNewOnes(){
    document.getElementsByClassName('question')[0].remove();
    console.log('hey');
    for(var i = 0; i < 4; i++){
        document.getElementsByClassName('choiceHolder')[0].remove();
    }

    if(listOfQuestions[questionNumber-1].type !== 'in order'){
        rearrange(randomChoice);
        console.log(randomChoice);
    }else{
        randomChoice = [1, 2, 3, 4];
    }

    var t = document.createElement('p');
    t.className = 'question';
    t.innerHTML = questionNumber + '. ' + listOfQuestions[questionNumber-1].question;
    document.getElementById('quizContent').appendChild(t);
    for (var i = 0; i < listOfQuestions[questionNumber-1].choices.length; i++){
        var d = document.createElement('div');
        d.className = 'choiceHolder';
        document.getElementById('quizContent').appendChild(d);
        document.getElementById('choiceHolder')

        var empty = document.createElement('div');
        empty.className = 'choiceEmpty';
        document.getElementsByClassName('choiceHolder')[i].appendChild(empty);

        var answerContent = document.createElement('p');
        answerContent.className = 'choiceContent';
        answerContent.innerHTML = listOfQuestions[questionNumber-1].choices[randomChoice[i] - 1];
        document.getElementsByClassName('choiceHolder')[i].appendChild(answerContent);
    }

    for(var j = 0; j < 4; j++){
        document.getElementsByClassName('choiceEmpty')[j].addEventListener('click', select);
    }

}
function nextQuestion(){
    questionNumber++;
    document.getElementsByClassName('leftNav')[0].style.opacity = '1';
    document.getElementsByClassName('question')[0].style.transform = 'translate(-3000px, 0px)';
    for (var i = 0; i < 4; i++){
        document.getElementsByClassName('choiceHolder')[i].style.transform = 'translate(-3000px, 0px)';
    }
    setTimeout(removePreviousElementsAndCreateNewOnes, 500);
    document.getElementsByClassName('midNav')[0].innerHTML = "Question " + questionNumber + " of 10"
}

function previousQuestion(){
    if(document.getElementsByClassName('leftNav')[0].style.opacity !== '0.4'){
        questionNumber--;
        if(questionNumber == 1){
            document.getElementsByClassName('leftNav')[0].style.opacity = '0.4';
        }else{
            document.getElementsByClassName('leftNav')[0].style.opacity = '1';
        }
        document.getElementsByClassName('question')[0].style.transform = 'translate(3000px, 0px)';
        for (var i = 0; i < 4; i++){
            document.getElementsByClassName('choiceHolder')[i].style.transform = 'translate(3000px, 0px)';
        }
        setTimeout(removePreviousElementsAndCreateNewOnes, 500);
        document.getElementsByClassName('midNav')[0].innerHTML = "Question " + questionNumber + " of 10"
    }
    
}

function startQuiz(){
    console.log(questionNumber);
    storage = [];
    document.getElementById('bigTitle').style.display = 'none';
    document.getElementById('getStarted').style.display = 'none';
    rearrange(listOfQuestions);
    console.log(listOfQuestions);

    var t = document.createElement('p');
    t.className = 'question';
    t.innerHTML = "1. " + listOfQuestions[questionNumber-1].question;
    document.getElementById('quizContent').appendChild(t);

    if(listOfQuestions[questionNumber-1].type !== 'in order'){
        rearrange(randomChoice);
        console.log(randomChoice);
    }else{
        randomChoice = [1, 2, 3, 4];
    }
    
    for (var i = 0; i < listOfQuestions[questionNumber-1].choices.length; i++){
        var d = document.createElement('div');
        d.className = 'choiceHolder';
        document.getElementById('quizContent').appendChild(d);

        var empty = document.createElement('div');
        empty.className = 'choiceEmpty';
        document.getElementsByClassName('choiceHolder')[i].appendChild(empty);

        var answerContent = document.createElement('p');
        answerContent.className = 'choiceContent';
        answerContent.innerHTML = listOfQuestions[questionNumber-1].choices[randomChoice[i] - 1];
        document.getElementsByClassName('choiceHolder')[i].appendChild(answerContent);
    }

    var nav = document.createElement('div');
    nav.id = 'navigation';
    document.body.appendChild(nav);

    var left = document.createElement('p');
    left.innerHTML = '🡠 Prev. question'
    left.className = 'leftNav';
    document.getElementById('navigation').appendChild(left);

    var mid = document.createElement ('p');
    mid.innerHTML = 'Question 1 of 10';
    mid.className = 'midNav';
    document.getElementById('navigation').appendChild(mid);

    var right = document.createElement('p');
    right.innerHTML = 'Next question 🡢'
    right.className = 'rightNav';
    document.getElementById('navigation').appendChild(right);

    for(var j = 0; j < 4; j++){
        document.getElementsByClassName('choiceEmpty')[j].addEventListener('click', select);
    }

    document.getElementsByClassName('rightNav')[0].addEventListener('click', nextQuestion);
    document.getElementsByClassName('leftNav')[0].addEventListener('click', previousQuestion);
}

function select(){
    for (var j = 0; j < 4; j++){
        document.getElementsByClassName('choiceEmpty')[j].style.backgroundColor = 'white';
    }
    if(this.style.backgroundColor === 'white'){
        this.style.backgroundColor = 'blue';
    }else{
        this.style.backgroundColor = 'white';
    }
}

console.log(document.getElementById('topHeader').style.height);
document.getElementById('getStarted').addEventListener('click', startQuiz);


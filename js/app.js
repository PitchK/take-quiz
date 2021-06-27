var listOfQuestions = [{question: 'The dysphoric state of substance use disorders is fueled by hormones such as _____?', choices: ['Corticotropin releasing factor', 'Dopamine', 'Ligase', 'B12'], answer: 'Corticotropin releasing factor', type: 'normal', explanation: 'Corticotropin releasing factor is a hormone that takes part in the body\'s stress response, and fuels the dysphoric state of substance use disorders.'}, {question: 'What is the most widely used illicit drug amongst adolescents?', choices: ['Nitrous oxide', 'Marijuana', 'Cocaine', 'Heroin'], answer: 'Marijuana', type: 'normal', explanation: 'Marijuana is the most widely used illicit drug amongst adolescents. According to the 2020 Monitoring the Future study among adolescents, the lifetime prevalence of use of marijuana among 12th graders is 61.5% - meaning that 61.5% of 12th graders have used marijuana at least once in their life. Scary, right?'}, {question: 'According to the New England Journal of Medicine, what are the three stages of substance use disorders?', choices: ['Guilt, craving, high', 'Craving, crash, fun', 'Anticipation, craving, consuming', 'Intoxication, withdrawal, anticipation'], answer: 'Intoxication, withdrawal, anticipation', type: 'normal', explanation: 'The New England Journal of Medicine divided the cycle of substance use disorders into three stages: Intoxication, withdrawal, and anticipation. In the intoxication state, the user injects or consumes the substance. The substance begins to elicit a extremely euphoric effect, maiing the user feel good. In the withdrawal state, the euphoric effect of the substance wears off, and the individual experiences heightened sensitivity to stress, irritability, and dysphoric. In the anticipation state, the individual is ready to get out of the withdrawal state and is starting to crave the substance again. He starts thinking how, when, and where he could obtain the substance again.'}, {question: 'Which of the following reasons may be the reason why people start using substances?', choices: ['Peer pressure', 'Boredom', 'Curiosity', 'All of the above'], answer: 'All of the above', type: 'in order', explanation: 'All of these - and many more reasons, such as the environment, stress, or depression, may cause people to start using substances.'}, {question: 'What is the active ingredient in marijuana?', choices: ['Methionine', 'THC', 'Methane', 'Dopamine'], answer: 'THC', type: 'normal', explanation: 'THC, or also called delta-9-tetrahydrocannabinol, is the active ingredient in marijuana. THC looks similar to a neurotransmitter in the brain, known as anandamide. Therefore, it is able to "fool" the brain into thinking it is anandamide, and could start affecting different parts the brain. (Source: https://www.drugabuse.gov/publications/research-reports/marijuana/how-does-marijuana-produce-its-effects)'}, {question: 'What is the leading cause of preventable death in the United States?', choices: ['Alcohol use', 'Heart attacks', 'Smoking', 'Methamphetamine'], answer: 'Smoking', type: 'normal'}, {question: 'When exposed to the "high" of a substance so many times, you may start feeling anxious, excited, or agitated when you are exposed to outside stimuli that remind you of the substance. This is known as?', choices: ['Axon transfer', 'Neuron jumps', 'Classical conditioning', 'Memory recall'], answer: 'Classical conditioning', type: 'normal', explanation: 'Classical conditioning, or Pavlovian conditioning, explains the phenomenon. For example, let\'s create another hypothetical situation where you use marijuana with your friend all the time in the school bathrooms. When exposed to the \'high\' of marijuana so many times, you may start to feel a bit of \'anticipation\' when you 1) see your friend\'s house, 2) smell marijuana, or 3) pass by the school bathrooms. This phenomenon is named after an experiment that Ivan Pavlov, a Russian physiologist, did with dogs.'}, {question: 'More than __ out of 10 teenagers mistakenly believe it is safer to use prescription drugs than illicit drugs.', choices: ['2', '3', '4', '5'], answer: '4', type: 'in order', explanation: '41% of teenagers believe that prescription drugs are safer than normal drugs. Unfortunately, that is not the case. Prescription drugs can be just as addictive as normal drugs, which is the reason why they are prescribed in such a "controlled" amount.'}, {question: 'Is there a difference between substance use and substance use disorders?', choices: ['No, the terms are used interchangeably.', 'No, all people who have used a substance can be classified as having a substance use disorder.', 'Yes, substance use disorders can be caused by substance use, and it is a behavioral problem.', 'Yes, substance use disorders can be caused by substance use, and has physical signs and symptoms.'], answer: 'Yes, substance use disorders can be caused by substance use, and it is a behavioral problem.', type: 'in order', explanation: 'There is a difference between substance use and substance use disorders. Substance use disorders is the uncontrollable use of a particular substance, and it is a behavioral problem. Substance use, as its name implies, is when an individual uses a substance. The danger of substance use is that it could lead to substance use disorders.'}, {question: 'Why is substance use so harmful?', choices: ['It could lead to substance use disorders.', 'The substances can do harmful things to your own body.', 'Substance use may affect people around you.', 'All of the above'], answer: 'All of the above', type: 'in order', explanation: 'Substance use is dangerous because first, it could lead to substance use disorders. It is also dangerous because some of the substances can do dangerous things to your body (an example is vaping - vapes contain carcinoges which are chemicals that may cause caner in the future.) Finally, the effect that these substances can have on your body is that it could affect others around you as well (i.e. you may become violent as a direct result of a substance.)'}, {question: 'About ____ of marijuana users in high school get D\'s and F\'s.', choices: ['Half', 'a third', 'a quarter', 'three-quarters'], answer: 'Half', type: 'normal', explanation: 'To be exact, 48% of marijuana users in high school get D\'s and F\'s. This is opposed to 10% of marijuana users who get A\'s.'}, {question: 'According to the British Drug Survey of 2014, more than 80% of drug users reported that ____ was their first illicit drug that they used?', choices: ['Cocaine', 'Marijuana', 'Nitrous oxide', 'Vaping'], answer: 'Marijuana', type: 'normal', explanation: '82% of respondents stated that marijuana was the first illicit drug they tried, followed by 6% with amphetamines. Other drugs included: magic mushrooms, LSD, crack, cocaine, and MDMA(ecstasy).'}, {question: 'According to the British Drug Survey of 2014, about __% of drug users stated that they started to use substances when they were below 18.', choices: ['27', '38', '55', '64'], answer: '64', type: 'in order', explanation: '64% of drug users first started using when they were below 18 (still an adolescent). This shows how susceptible adolescents are to fall into substance use.'}, {question: 'Vapes contain ______, which are chemicals that may cause cancer.', choices: ['Dopamine', 'Nicotine', 'Carcinogens', 'Epinephrines'], answer: 'Carcinogens', type: 'normal', explanation: 'null'}];
var scoreBreakdownText = ['Questions correct:', 'Time spent:', 'Longest correct answer streak:', 'Rank:']
var scoreBreakdownColors = ['darkgreen', 'orange', 'purple', 'cornflowerblue'];
var questionNumber = 1;
var randomChoice = [1, 2, 3, 4];
var userResults = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var userTimes = [];
var userStreaks = [];
var streaks = [];
var detect;
var FirstDateGlobal;

//setup
for(var i = 0; i < 10; i++){
    userTimes.push(null);
}

var devOrientation = '';
//decide whether navigation bar will show right or left arrow; make mobile compatible
function decideLorR(x){
    if(x.matches){
        devOrientation = 'portrait';
    }else{
        devOrientation = 'landscape';
    }
}

var x = window.matchMedia("(orientation: portrait)");
decideLorR(x);
x.addListener(decideLorR);

function rearrange(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function scanChoices(){
    detect = 0;
    for (var i = 0; i < 4; i++){
        var scan = document.getElementsByClassName('choiceEmpty')[i];
        if(scan.style.backgroundColor === 'blue'){
            detect = (i+1);
            break;
        }
    }
    userResults[questionNumber-1] = detect;
    /*console.log(userResults);*/
}

function calculateScore(){
    
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('navigation').remove();
    var userScore = 0;
    var currentStreak = 0;
    var correctQuestions = 0;
    var totalTimeElapsed = 0;
    var totalSpeedScore = 0;
    var totalStreakScore = 0;
    for (var i = 0; i < 10; i++){
        totalTimeElapsed += userTimes[i];
        if((userResults[i] - 1) === listOfQuestions[i].choices.indexOf(listOfQuestions[i].answer)){
            currentStreak++;
            correctQuestions++;
            userScore+= 1000 + (currentStreak * 75);
            userScore+= 500 - (userTimes[i] / 10);
            totalSpeedScore += 500 - (userTimes[i] / 10);
            totalStreakScore += (currentStreak * 75);
            userStreaks.push(currentStreak);
        }else{
            streaks.push(currentStreak);
            currentStreak = 0;
            userStreaks.push(currentStreak);
        }
    }
    document.getElementById('imtoolazyforthis').style.display = 'block';
    document.getElementById('score').innerHTML = Math.round(userScore);
    streaks.push(currentStreak);

    if(devOrientation === 'portrait'){
        document.getElementById('scoreBreakdown2').style.display = 'none';
    }

    //find maximum streak
    var foundStreak = -1;
    for (var i = 0; i < streaks.length; i++){
        if(streaks[i] > foundStreak){
            foundStreak = streaks[i];
        }
    }
    
    console.log(streaks);
    for(var i = 0; i < 2; i++){
        for(var j = 0; j < 2; j++){
            var h = document.createElement('div');
            h.className = 'holder';
            document.getElementsByClassName('scoreBreakdownDetail')[i].appendChild(h);

            var l = document.createElement('p');
            l.innerHTML = scoreBreakdownText[(i*2)+j];
            l.className = 'first';
            document.getElementsByClassName('holder')[(i*2)+j].appendChild(l);
            document.getElementsByClassName('holder')[(i*2)+j].style.backgroundColor = scoreBreakdownColors[(i*2)+j];

            var m = document.createElement('p');
            if(i === 0 && j === 0){
                m.innerHTML = correctQuestions + '/10';
            }else if (i === 0 && j === 1){
                var newString;
                if (totalTimeElapsed > 60000){
                    newString = Math.trunc(totalTimeElapsed / 60000) + 'm ' + Math.trunc((totalTimeElapsed - (Math.trunc(totalTimeElapsed / 60000)*60000))/1000) + 's ' + (totalTimeElapsed - (Math.trunc(totalTimeElapsed / 60000)*60000) - (Math.trunc((totalTimeElapsed - (Math.trunc(totalTimeElapsed / 60000)*60000))/1000)*1000)) + 'ms';
                }else{
                    newString = Math.trunc(totalTimeElapsed / 1000) + 's ' + (totalTimeElapsed - (Math.trunc(totalTimeElapsed / 1000)*1000)) + 'ms';
                }
                m.innerHTML = newString;
            }else if (i === 1 && j === 0){
                m.innerHTML = foundStreak;
            }else{
                m.innerHTML = 'Master'
            }
            m.className = 'second';
            document.getElementsByClassName('holder')[(i*2)+j].appendChild(m);

            var n = document.createElement('p');
            n.className = 'third';
            if(i === 0 && j === 0){
                n.innerHTML = 'Original score: ' + (correctQuestions*1000);
            }else if (i === 0 && j === 1){
                n.innerHTML = 'Score added by ' + Math.trunc(totalSpeedScore);
            }else if (i === 1 && j === 0){
                n.innerHTML = 'Score added by ' + totalStreakScore;
            }else{
                n.innerHTML = 'This doesn\'t affect your score, but it\'s nice to know!'
            }
            document.getElementsByClassName('holder')[(i*2)+j].appendChild(n);
        }
    }

    var d = document.createElement('div');
    d.id = 'linkHolder';
    document.getElementById('what').appendChild(d);
    for (var i = 0; i < 2; i++){
        var e = document.createElement('p');
        e.className = 'links';
        if (i === 0){
            e.innerHTML = 'Go over questions';
        }else{
            e.innerHTML = 'Exit quiz';
        }
        document.getElementById('linkHolder').appendChild(e);
    }
    if(devOrientation === 'landscape'){
        document.getElementsByClassName('links')[1].style.marginLeft = '20%';
        
    
    }
    createDetailedScoreBreakdown();
}

function revert(){
    for (var i = 0; i < 4; i++){
        document.getElementsByClassName('holder')[0].remove();
    }

    for (var j = 0; j < 10; j++){
        document.getElementsByClassName('detailHolder')[0].remove();
    }
    document.getElementById('linkHolder').remove();
    document.getElementById('firstDetailHolder').remove();
    document.getElementById('imtoolazyforthis').style.display = 'none';
    document.getElementById('topHeader').style.display = 'block';
    document.getElementById('bigTitle').style.display = 'block';
    document.getElementById('getStarted').style.display = 'block';
}

var alphabeticalReference = ['N/A', 'A', 'B', 'C', 'D'];
var legend = ['Question', 'Your answer', 'Actual answer', 'Score given', 'Streak', 'Score bonus', 'Time spent', 'Score bonus', 'Total'];
var widths = ['34.5', '7.5', '7.5', '7.5', '6', '7.5', '11.5', '8', '8.5'];

function createDetailedScoreBreakdown(){
    if (devOrientation === 'landscape'){
        var dhf = document.createElement('div');
    dhf.id = 'firstDetailHolder';
    document.getElementById('section').appendChild(dhf);

    for (var i = 0; i<legend.length; i++){
        var inner = document.createElement('p');
        inner.className = 'subDetailHolder';
        inner.innerHTML = legend[i];
        document.getElementById('firstDetailHolder').appendChild(inner);
        document.getElementsByClassName('subDetailHolder')[i].style.width = widths[i] + '%';
    }

    document.getElementsByClassName('subDetailHolder')[0].style.borderRight = '2px solid black';

    document.getElementsByClassName('subDetailHolder')[3].style.borderRight = '2px solid black';
    document.getElementsByClassName('subDetailHolder')[5].style.borderRight = '2px solid black'
    document.getElementsByClassName('subDetailHolder')[7].style.borderRight = '4px solid black'
    document.getElementsByClassName('subDetailHolder')[8].style.borderRight = 'none';

    for (var i = 0; i < 10; i++){
        var dh = document.createElement('div');
        dh.className = 'detailHolder';
        document.getElementById('section').appendChild(dh);
        if(i % 2 === 0){
            document.getElementsByClassName('detailHolder')[i].style.backgroundColor = '#cfcfcf';
        }else{
            document.getElementsByClassName('detailHolder')[i].style.backgroundColor = 'whitesmoke';
        }

        var a = document.createElement('p');
        a.className = 'firstCol';
        a.innerHTML = (i+1) + ". " + listOfQuestions[i].question;
        document.getElementsByClassName('detailHolder')[i].appendChild(a);

        var b = document.createElement('p');
        b.className = 'secondCol';
        b.innerHTML = alphabeticalReference[userResults[i]];
        document.getElementsByClassName('detailHolder')[i].appendChild(b);

        var c = document.createElement('p');
        c.className = 'thirdCol';
        c.innerHTML = alphabeticalReference[listOfQuestions[i].choices.indexOf(listOfQuestions[i].answer)+1];
        document.getElementsByClassName('detailHolder')[i].appendChild(c);

        var d = document.createElement('p');
        d.className = 'fourthCol';
        if(alphabeticalReference[userResults[i]] === alphabeticalReference[listOfQuestions[i].choices.indexOf(listOfQuestions[i].answer)+1]){
            d.innerHTML = '+1000';
        }else{
            d.innerHTML = '+0';
        }
        document.getElementsByClassName('detailHolder')[i].appendChild(d);

        var e = document.createElement('p');
        e.className = 'fifthCol';
        e.innerHTML = userStreaks[i];
        document.getElementsByClassName('detailHolder')[i].appendChild(e);

        var f = document.createElement('p');
        f.className = 'sixthCol';
        f.innerHTML = "+" + userStreaks[i]*75;
        document.getElementsByClassName('detailHolder')[i].appendChild(f);

        var g = document.createElement('p');
        g.className = 'seventhCol';
        g.innerHTML = Math.trunc(userTimes[i] / 1000) + 's ' + (userTimes[i] - (Math.trunc(userTimes[i] / 1000)*1000)) + 'ms';
        document.getElementsByClassName('detailHolder')[i].appendChild(g);

        var h = document.createElement('p');
        h.className = 'eighthCol';
        if(alphabeticalReference[userResults[i]] === alphabeticalReference[listOfQuestions[i].choices.indexOf(listOfQuestions[i].answer)+1]){
            h.innerHTML = "+" + Math.round(500 - (userTimes[i] / 10));
        }else{
            h.innerHTML = "+0";
        }
        
        document.getElementsByClassName('detailHolder')[i].appendChild(h);

        var aa = document.createElement('p');
        aa.className = 'ninthCol';
        if(alphabeticalReference[userResults[i]] === alphabeticalReference[listOfQuestions[i].choices.indexOf(listOfQuestions[i].answer)+1]){
            aa.innerHTML = "+" + (1000 + (userStreaks[i]*75) + Math.round(500 - (userTimes[i] / 10)));
        }else{
            aa.innerHTML = "+0";
        }
        document.getElementsByClassName('detailHolder')[i].appendChild(aa)
    }
    document.getElementsByClassName('detailHolder')[document.getElementsByClassName('detailHolder').length - 1].style.borderBottom = '3px solid black';
    }
    
    document.getElementsByClassName('links')[1].addEventListener('click', revert);
}

function removePreviousElementsAndCreateNewOnes(){
    document.getElementsByClassName('question')[0].remove();
    for(var i = 0; i < 4; i++){
        document.getElementsByClassName('choiceHolder')[0].remove();
    }

    if(listOfQuestions[questionNumber-1].type !== 'in order'){
        rearrange(randomChoice);
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
        answerContent.innerHTML = listOfQuestions[questionNumber-1].choices[i];
        document.getElementsByClassName('choiceHolder')[i].appendChild(answerContent);
    }

    if (userResults[questionNumber - 1] !== 0){
        document.getElementsByClassName('choiceEmpty')[userResults[questionNumber - 1] - 1].style.backgroundColor = 'blue';
    }

    for(var j = 0; j < 4; j++){
        document.getElementsByClassName('choiceHolder')[j].addEventListener('click', select);
    }
}

function nextQuestion(){
    if(userTimes[questionNumber - 1] == null){
        var elapsedTime = new Date().getTime() - FirstDateGlobal;
        userTimes[questionNumber - 1] = elapsedTime;
        /*console.log('For question' + questionNumber + ": " + "Elapsed time is " + elapsedTime);
        console.log('List is ' + userTimes);*/
    }
    
    scanChoices();
    if(this.innerHTML !== 'Finish quiz 🡢'){
        questionNumber++;
        if(questionNumber === 10){
            this.innerHTML = 'Finish quiz 🡢';
        }
        document.getElementsByClassName('leftNav')[0].style.opacity = '1';
        document.getElementsByClassName('question')[0].style.display = 'none';
            for (var i = 0; i < 4; i++){
                document.getElementsByClassName('choiceHolder')[i].style.display = 'none';
            }
        setTimeout(removePreviousElementsAndCreateNewOnes, 150);
        document.getElementsByClassName('midNav')[0].innerHTML = "Question " + questionNumber + " of 10";
        FirstDateGlobal = new Date().getTime();
    }else{
        document.getElementsByClassName('question')[0].remove();
        for(var i = 0; i < 4; i++){
            document.getElementsByClassName('choiceHolder')[0].remove();
        }
        document.getElementById('navigation').style.bottom = '-50%';
        setTimeout(calculateScore, 500);
    }
}

function previousQuestion(){
    scanChoices();
    if(document.getElementsByClassName('leftNav')[0].style.opacity !== '0.4'){
        questionNumber--;
        if(questionNumber == 1){
            document.getElementsByClassName('leftNav')[0].style.opacity = '0.4';
        }else{
            document.getElementsByClassName('leftNav')[0].style.opacity = '1';
        }
        document.getElementsByClassName('question')[0].style.display = 'none';
        for (var i = 0; i < 4; i++){
            document.getElementsByClassName('choiceHolder')[i].style.display = 'none';
        }
        setTimeout(removePreviousElementsAndCreateNewOnes, 150);
        document.getElementsByClassName('midNav')[0].innerHTML = "Question " + questionNumber + " of 10"
    }
    if(devOrientation === 'landscape'){
        document.getElementsByClassName('rightNav')[0].innerHTML = 'Next question 🡢';

    }else{
        document.getElementsByClassName('rightNav')[0].innerHTML = '🡢';
    }
}
    

function startQuiz(){ 
questionNumber = 1;
randomChoice = [1, 2, 3, 4];
userResults = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
userTimes = [];
userStreaks = [];
streaks = [];
    storage = [];
    document.getElementById('bigTitle').style.display = 'none';
    document.getElementById('getStarted').style.display = 'none';
    rearrange(listOfQuestions);

    var t = document.createElement('p');
    t.className = 'question';
    t.innerHTML = "1. " + listOfQuestions[questionNumber-1].question;
    document.getElementById('quizContent').appendChild(t);

    questionNumber = 1;

    for(var j = 0; j < listOfQuestions.length; j++){
        if(listOfQuestions[j].type !== 'in order'){
            rearrange(listOfQuestions[j].choices);
        }
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
        answerContent.innerHTML = listOfQuestions[questionNumber-1].choices[i];
        document.getElementsByClassName('choiceHolder')[i].appendChild(answerContent);
    }

    var nav = document.createElement('div');
    nav.id = 'navigation';
    document.body.appendChild(nav);

    var sNav = document.createElement('div');
    sNav.id = 'subNavigation';
    document.getElementById('navigation').appendChild(sNav);

    var left = document.createElement('p');
    if(devOrientation === 'landscape'){
        left.innerHTML = '🡠 Prev. question'
    
    }else{
        left.innerHTML = '🡠'
    }
    
    left.className = 'leftNav';
    document.getElementById('subNavigation').appendChild(left);

    var mid = document.createElement ('p');
    mid.innerHTML = 'Question 1 of 10';
    mid.className = 'midNav';
    document.getElementById('subNavigation').appendChild(mid);

    var right = document.createElement('p');
    if(devOrientation === 'landscape'){
        right.innerHTML = 'Next question 🡢'
    }else{
        right.innerHTML = '🡢';
    }
    
    right.className = 'rightNav';
    document.getElementById('subNavigation').appendChild(right);

    for(var j = 0; j < 4; j++){
        document.getElementsByClassName('choiceHolder')[j].addEventListener('click', select);
    }

    questionNumber = 1;

    document.getElementsByClassName('rightNav')[0].addEventListener('click', nextQuestion);
    document.getElementsByClassName('leftNav')[0].addEventListener('click', previousQuestion);
    FirstDateGlobal = new Date().getTime();
    console.log(FirstDateGlobal);
}

function select(){
    for (var j = 0; j < 4; j++){
        document.getElementsByClassName('choiceEmpty')[j].style.backgroundColor = 'white';
    }
    if(this.getElementsByClassName('choiceEmpty')[0].style.backgroundColor === 'white'){
        this.getElementsByClassName('choiceEmpty')[0].style.backgroundColor = 'blue';
    }else{
        this.getElementsByClassName('choiceEmpty')[0].style.backgroundColor = 'white';
    }
}

document.getElementById('getStarted').addEventListener('click', startQuiz);

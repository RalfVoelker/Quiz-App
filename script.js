let questions = [
    {
        "question": "Mit welchem HTML-Tag fügt man ein Bild in eine Webseite ein?",
        "answer_1": "&ltimage&gt",
        "answer_2": "&ltpic&gt",
        "answer_3": "&ltimg&gt",
        "answer_4": "&ltjpg&gt",
        "right_answer": 3
    },
    {
        "question": "Wie fügt man einen Zeilenumbruch in HTML ein?",
        "answer_1": "&ltdr&gt",
        "answer_2": "&ltbr&gt",
        "answer_3": "&ltbreak&gt",
        "answer_4": "&lttd&gt",
        "right_answer": 2
    },
    {
        "question": "Welche HTML-Tags werden verwendet, um eine geordnete Liste zu erstellen?",
        "answer_1": "&ltol&gt",
        "answer_2": "&ltul&gt",
        "answer_3": "&ltli&gt",
        "answer_4": "&lttr&gt",
        "right_answer": 1
    },
    {
        "question": "Welches Element wird verwendet, um Eine Überschrift einer Webseite darzustellen?",
        "answer_1": "&ltheadline&gt",
        "answer_2": "&lthl&gt",
        "answer_3": "&lth1&gt",
        "answer_4": "&ltnav&gt",
        "right_answer": 3
    },
    {
        "question": "Mit welchen HTML-Tag erstellt man einen Link zu einer anderen Webseite?",
        "answer_1": "&ltlink&gt",
        "answer_2": "&lthttp&gt",
        "answer_3": "&ltweb&gt",
        "answer_4": "&lta&gt",
        "right_answer": 4
    }
];


let currentQuestion = 0; //erste Frage


function init(){
    document.getElementById('number-of-questions').innerHTML = questions.length;    // Anzahl der Fragen anzeigen 
    document.getElementById('question-number').innerHTML = currentQuestion + 1;    // Nummer der aktuellen Frage anzeigen
    showQuestion();                                                                 // Frage anzeigen
};


function showQuestion(){
    if (currentQuestion >= questions.length) {
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
        // showEndScreen() ;  //TODO END-Screen
    }else{
        let question = questions[currentQuestion];                            // Nummer der aktuellen Frage in ""question schreiben
        document.getElementById('question').innerHTML = question['question']; // Anzeige der Frage
        document.getElementById('answer_1').innerHTML = question['answer_1']; // Anzeige der 1. Antwort
        document.getElementById('answer_2').innerHTML = question['answer_2']; // Anzeige der 2. Antwort
        document.getElementById('answer_3').innerHTML = question['answer_3']; // Anzeige der 3. Antwort
        document.getElementById('answer_4').innerHTML = question['answer_4']; // Anzeige der 4. Antwort
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
    }
};


function showEndScreen(){
    document.getElementById('question').innerHTML = 'Game over'; // Anzeige der Frage
        document.getElementById('answer_1').innerHTML = ''; // Anzeige der 1. Antwort
        document.getElementById('answer_2').innerHTML = ''; // Anzeige der 2. Antwort
        document.getElementById('answer_3').innerHTML = ''; // Anzeige der 3. Antwort
        document.getElementById('answer_4').innerHTML = ''; // Anzeige der 4. Antwort
        
}


function answer(selection){
    let question = questions[currentQuestion];                  //welche Frage...
    let selectedQuestionNumber = selection.slice(-1);           //Nummer der Frage (letztes Zeichen aus String)
    let idOfRigthAnswer = `answer_${question['right_answer']}`; //id der richtigen Antwort

    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');//wenn Antwort richtig dann grün ansonsten falsche Antwort rot und Anzeige der richtigen Antwort in grün
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');//mit parrentNode dem übergeordneten Element von "answer_x" die Farbe des Buttons hinzufügen
        document.getElementById(idOfRigthAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false; // Button auf enabled setzen
}


function nextQuestion(){
    currentQuestion++;  // nummer der aktuellen Frage um 1 erhöhen
    document.getElementById('next-button').disabled = true; // Button auf disabled setzen
    resetAnswerButton();
    showQuestion();     // aktuelle Frage anzeigen
}


function resetAnswerButton(){
    for (let i = 1; i < questions.length; i++) {
        let idOfAnswer = `answer_${i}`; //id der Antwort
        document.getElementById(idOfAnswer).parentNode.classList.remove('bg-danger');
        document.getElementById(idOfAnswer).parentNode.classList.remove('bg-success');
    }
}
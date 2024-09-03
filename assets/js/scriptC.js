const quizResults = ()=>{    
let percCorretteC = (score / questions.length) * 100;
  let percWrongC = 100 - percCorretteC;

  // ritorna le percentuali aggiornate e arrotondate grazie a .toFixed
  document.getElementById("percCorretteC").innerText = percCorretteC.toFixed(1) + "%";
  document.getElementById("percWrongC").innerText = percWrongC.toFixed(1) + "%";

  // restituisce il numero di risposte corrette/dbagliate sul totale
  document.getElementById("pQuestonsCorrectC").innerText = score + "/" + questions.length + " questions";
  document.getElementById("pQuestionsWrongC").innerText = (questions.length - score) + "/" + questions.length + " questions";

  // Aggiorna i messaggi di congratulazioni e altri messaggi
  if(score> question.length/2){
    document.getElementById(pTitleC).innerText = "Congratulation!";
  } else{
    document.getElementById(pTitleC).innerText = "Ops...";

  }
  if(score> question.length/2){
    document.getElementById("pSubtitleC").innerText= "You passed the exam";
  }else{
    document.getElementById("pSubtitleC").innerText= "You didn't passed the exam";
  }
  if (score>question.length/2){
    document.getElementById("certificateC").innerText ="We'll send you the certificate in a few minutes";
  } else{
    document.getElementById("certificateC").innerText ="You can't receive the certificate" ;

  }
  if (score>question.length/2){
    document.getElementById("emailCertificateC").innerText =  "Check your email (including promotions/spam folder)";
  }else{
    document.getElementById("emailCertificateC").innerText = "Study and  try again...good luck!";
  }

  // grafico aggiornato con le nuoe percentuli
  let grapichC = document.querySelector(".grapichC");
  grapichC.style.backgroundImage = `conic-gradient(#d20094 0% ${percCorretteC}%, #00ffff 0% ${percWrongC}%);`;
}

document.addEventListener("DOMContentLoaded", function (){
    showQuestion(),
    quizResults();
});
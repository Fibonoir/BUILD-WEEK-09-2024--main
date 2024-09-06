const results = () =>{

  const params = new URLSearchParams(window.location.search);
  console.log(params); // This should log the URLSearchParams object
  console.log(params.toString()); // This should log the query string

  const punteggio = params.get('punteggio');
  const totDomande = params.get('totDomande');

  console.log(punteggio); // This should log the value of 'punteggio'
  console.log(totDomande);


  let percCorretteC = (punteggio / totDomande) * 100;
    let percWrongC = 100 - percCorretteC;
  
    // ritorna le percentuali aggiornate e arrotondate grazie a .toFixed
    document.getElementById("percCorretteC").innerText = percCorretteC.toFixed(1) + "%";
    document.getElementById("percWrongC").innerText = percWrongC.toFixed(1) + "%";
  
    // restituisce il numero di risposte corrette/dbagliate sul totale
    document.getElementById("pQuestionsCorrectC").innerText = punteggio + "/" + totDomande + " questions";
    document.getElementById("pQuestionsWrongC").innerText = (totDomande - punteggio) + "/" + totDomande + " questions";
  
    // Aggiorna i messaggi di congratulazioni e altri messaggi
    if(punteggio> totDomande/2){
      document.getElementById("pTitleC").innerText = "Congratulation!";
      document.getElementById("pSubtitleC").innerText= "You passed the exam";
      document.getElementById("certificateC").innerText ="We'll send you the certificate in a few minutes. \n Check your email (including promotions/spam folder)";
      // document.getElementById("emailCertificateC").innerText =  "Check your email (including promotions/spam folder)";
     
    } else{
      document.getElementById("pTitleC").innerText = "Ops...So sorry";
      document.getElementById("pSubtitleC").innerText= "Exam not passed!";
      document.getElementById("certificateC").innerText ="You can't receive the certificate. \n Study and  try again...good luck!" ;
      // document.getElementById("emailCertificateC").innerText = "Study and  try again...good luck!";
    }
    
    // grafico aggiornato con le nuove percentuli
    let graphicC = document.getElementById("graphicC")
    graphicC.style.backgroundImage = `conic-gradient(#d20094 0% ${percCorretteC}%, #00ffff 0% ${percWrongC}%)`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    results();
  });
  
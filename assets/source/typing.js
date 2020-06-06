function printSentence(id, sentence, speed) {
  function pp() {
    var char= sentence.charAt(index);     
    if(char === '<') index= sentence.indexOf('>',index);
    document.getElementById(id).innerHTML= sentence.substr(0,index);
    if(++index === sentence.length){
      clearInterval(timer);
    }
  }
  
  var index = 0,
      timer = setInterval(pp, speed);
} //printSentence

var a = printSentence(
  'intro',
  'Sheng graduated from the <a href="https://www.pantheonsorbonne.fr/ecoles-doctorales/economie-ed-465/doctoral-program-edeem/">EDEEM Erasmus Programme</a> and obtained his PhD from <a href="https://www.parisschoolofeconomics.eu/en/">Paris School of Economics</a>..',
  20);

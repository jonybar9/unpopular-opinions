var gElements = []
function replacePhrases () {
  var nodes = document.evaluate(".//*[not(self::script) and not(*)]", document, null, XPathResult.ANY_TYPE, null);
  
  var elements = [];
  var nextNode = nodes.iterateNext();
  while (nextNode) {
    elements.push(nextNode);
    nextNode = nodes.iterateNext();
  }

  if(gElements.length === elements.length) return

  var phrase = 'דעה לא פופולרית';
  var phraseToReplace = 'עמדת ההגמוניה';
  for (element of elements) {
    var text = element.innerText;
    if (text && text.includes(phrase)) {
      var phraseIdx = text.indexOf(phrase);
      var newText = text.substring(0, phraseIdx) + phraseToReplace + text.substring(phraseIdx + phrase.length);
      element.innerText = newText;
    }

  }
}

setInterval(replacePhrases, 5000)
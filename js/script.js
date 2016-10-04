// Language flag
var languageEN = true;

// Function which translates
function translation(locale) {

  var translateElements = document.getElementsByClassName('translate');

  for (var i = 0; i < translateElements.length; i++) {
    translateElements[i].innerHTML = locale[translateElements[i].dataset.translation];
  }

};

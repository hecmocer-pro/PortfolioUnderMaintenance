
// Language flag
var languageEN = true;

// English translation
var en = {
  langButton: 'Spanish version',
  title: 'Personal portfolio',
  subtitle: 'Work in progress...',
  pOne: 'Right now I\'m currently working to make this my own personal website where you could find information about myself.',
  pTwo: 'For the time being, you can check the older version of my personal website, available at <a href="hecmocer.github.io">hecmocer.github.io</a>',
  pThree: 'In case you want to contact me, please send an email to <a href="mailto:hecmocer.pro@gmail.com">hecmocer.pro@gmail.com</a>'
};

// Spanish translation
var es = {
  langButton: 'Versión en inglés',
  title: 'Página Web personal',
  subtitle: 'Trabajo en curso...',
  pOne: 'A día de hoy estoy trabajando en convertir esta en mi pagina web personal donde podrás encontrar información sobre mi.',
  pTwo: 'Por ahora, puedes ojear una versión antigua de mi página web en <a href="hecmocer.github.io">hecmocer.github.io</a>',
  pThree: 'Si deseas contactar conmigo, por favor manda un correo electrónico a <a href="mailto:hecmocer.pro@gmail.com">hecmocer.pro@gmail.com</a>'
};

// Function which translates
function translation(locale) {

  var translateElements = document.getElementsByClassName('translate');

  for (var i = 0; i < translateElements.length; i++) {
    translateElements[i].innerHTML = locale[translateElements[i].dataset.translation];
  }

};

// Initialization
(function () {

  // Language button listener
  document.getElementById('langButton').addEventListener('click', function() {
    languageEN = !languageEN;
    languageEN ? translation(en) : translation(es);
  });

})();

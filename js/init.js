// Initialization
(function () {

  // Language button listener
  document.getElementById('langButton').addEventListener('click', function() {
    languageEN = !languageEN;
    languageEN ? translation(en) : translation(es);
  });

})();

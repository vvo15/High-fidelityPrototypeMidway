document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("main-nav");
  if (!nav) return;

  nav.innerHTML =
    '<nav class="navbar">' +
    '<div class="nav-brand"><a href="index.html">COPE &amp; Climbing</a></div>' +
    '<ul class="nav-links">' +
    '<li><a href="index.html">Home</a></li>' +
    '<li><a href="standards.html">Standards</a></li>' +
    '<li><a href="classTopics.html">Class Topics</a></li>' +
    '<li><a href="exam.html">Exam</a></li>' +
    "</ul>" +
    "</nav>";
});

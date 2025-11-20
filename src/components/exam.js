document.addEventListener("DOMContentLoaded", function () {
  var titleEl = document.getElementById("exam-title");
  var introEl = document.getElementById("exam-intro");
  var noteEl = document.getElementById("exam-note");
  var formEl = document.getElementById("exam-form");

  if (!formEl) return;

  fetch("data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var exam = data.exam || {};

      if (exam.title && titleEl) titleEl.textContent = exam.title;
      if (exam.intro && introEl) introEl.textContent = exam.intro;
      if (exam.note && noteEl) noteEl.textContent = exam.note;

      var questions = exam.questions || [];
      var submitBtn = formEl.querySelector('button[type="submit"]');

      questions.forEach(function (q) {
        var wrapper = document.createElement("div");
        wrapper.className = "exam-question";

        wrapper.innerHTML =
          "<label>" +
          '<span class="exam-label">' +
          (q.label || "") +
          "</span>" +
          '<span class="exam-prompt">' +
          (q.prompt || "") +
          "</span>" +
          "</label>" +
          '<input type="text" name="q' +
          q.id +
          '" placeholder="' +
          (q.inputPlaceholder || "") +
          '">';

        formEl.insertBefore(wrapper, submitBtn);
      });

      formEl.addEventListener("submit", function (evt) {
        evt.preventDefault();
        alert(
          "Your answers have been recorded. Use the site resources to check your understanding."
        );
      });
    })
    .catch(function (err) {
      console.error("Error loading exam from data.json:", err);
    });
});

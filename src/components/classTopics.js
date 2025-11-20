document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("topics-grid");
  if (!grid) return;

  fetch("data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var topics = data.topics || [];

      topics.forEach(function (topic) {
        var card = document.createElement("div");
        card.className = "card";

        var lessonHtml;
        if (topic.lessonPlans && topic.lessonPlans.length > 0) {
          lessonHtml = topic.lessonPlans.join("<br>");
        } else {
          lessonHtml = "No lesson plans listed yet.";
        }

        card.innerHTML =
          "<h3>" +
          topic.title +
          "</h3>" +
          "<p>" +
          topic.description +
          "</p>" +
          '<div class="card-meta">' +
          "<strong>" +
          (topic.lessonPlansLabel || "Lesson Plans") +
          "</strong><br>" +
          lessonHtml +
          "</div>" +
          '<button class="btn ghost resources-btn">' +
          (topic.extraLabel || "Additional Resources") +
          "</button>";

        card
          .querySelector(".resources-btn")
          .addEventListener("click", function () {
            window.location.href =
              "resources.html?topic=" + encodeURIComponent(topic.id);
          });

        grid.appendChild(card);
      });
    })
    .catch(function (err) {
      console.error("Error loading topics from data.json:", err);
    });
});

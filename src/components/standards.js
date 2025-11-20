document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("standards-grid");
  if (!container) return;

  fetch("data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var standards = data.standards || [];

      standards.forEach(function (s) {
        var card = document.createElement("div");
        card.className = "card";

        card.innerHTML =
          "<h3>" +
          s.title +
          "</h3>" +
          "<p>" +
          s.description +
          "</p>" +
          '<button class="btn ghost standards-btn">' +
          (s.buttonLabel || "Access the Standards") +
          "</button>";

        card
          .querySelector(".standards-btn")
          .addEventListener("click", function () {
            window.location.href =
              "standardDetail.html?standard=" + encodeURIComponent(s.id);
          });

        container.appendChild(card);
      });
    })
    .catch(function (err) {
      console.error("Error loading data.json for standards:", err);
      container.textContent = "There was a problem loading the standards.";
    });
});

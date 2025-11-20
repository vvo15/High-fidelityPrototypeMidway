document.addEventListener("DOMContentLoaded", function () {
  var titleEl = document.getElementById("standard-title");
  var descEl = document.getElementById("standard-description");
  var resourcesContainer = document.getElementById("standard-resources");

  if (!titleEl || !descEl || !resourcesContainer) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get("standard");

  fetch("data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var standards = data.standards || [];
      var standard = standards.find(function (s) {
        return s.id === id;
      });

      if (!standard) {
        titleEl.textContent = "Standard not found";
        descEl.textContent =
          "We couldn't find details for that standard. Please go back and try again.";
        return;
      }

      titleEl.textContent = standard.title;
      descEl.textContent = standard.description;

      if (Array.isArray(standard.resources) && standard.resources.length > 0) {
        var list = document.createElement("ul");
        list.className = "resource-list";

        standard.resources.forEach(function (res) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = res.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = res.label;
          li.appendChild(a);
          list.appendChild(li);
        });

        resourcesContainer.appendChild(list);
      } else if (standard.link) {
        var p = document.createElement("p");
        var a = document.createElement("a");
        a.href = standard.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "Open standard";
        p.appendChild(a);
        resourcesContainer.appendChild(p);
      } else {
        resourcesContainer.textContent = "No resources listed yet.";
      }
    })
    .catch(function (err) {
      console.error("Error loading standard details:", err);
      titleEl.textContent = "Error loading standard";
      descEl.textContent =
        "There was a problem loading this standard's details.";
    });
});

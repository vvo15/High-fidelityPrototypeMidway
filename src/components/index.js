document.addEventListener("DOMContentLoaded", function () {
  var textarea = document.querySelector("#ask-bot textarea");
  if (textarea) {
    textarea.style.overflowY = "hidden";

    textarea.addEventListener("input", function () {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  }

  fetch("data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.site) {
        var t = document.getElementById("site-title");
        var tag = document.getElementById("site-tagline");
        if (t) t.textContent = data.site.title;
        if (tag) tag.textContent = data.site.tagline;
      }
    })
    .catch(function (err) {
      console.error("Error loading site data:", err);
    });
});

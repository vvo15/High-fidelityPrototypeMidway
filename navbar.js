document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".main-header");
  if (!header) return;

  header.innerHTML = `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          BSA COPE &amp; Climbing
        </a>

        <button class="nav-toggle" aria-label="Toggle navigation">
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
        </button>

        <ul class="nav-links">
          <li class="nav-item">
            <a href="index.html" class="nav-link" data-page="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a href="classTopics.html" class="nav-link" data-page="classTopics.html">Class Topics</a>
          </li>
          <li class="nav-item">
            <a href="standards.html" class="nav-link" data-page="standards.html">Standards &amp; Guidelines</a>
          </li>
          <li class="nav-item">
            <a href="exam.html" class="nav-link" data-page="exam.html">Exam</a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link" data-page="about.html">About</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
  const toggleBtn = header.querySelector(".nav-toggle");
  const linksList = header.querySelector(".nav-links");

  if (toggleBtn && linksList) {
    toggleBtn.addEventListener("click", () => {
      linksList.classList.toggle("nav-links--open");
    });
  }
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  header.querySelectorAll(".nav-link").forEach((link) => {
    const page = link.getAttribute("data-page");
    if (page === currentPage) {
      link.classList.add("nav-link--active");
    }
  });
});

if (typeof window !== "undefined") {
  window.onload = function () {
    const dividerLines = document.querySelectorAll(".all-divider-line");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the line is visible
    );

    // Observe each divider line
    dividerLines.forEach((line) => observer.observe(line));
  };
}

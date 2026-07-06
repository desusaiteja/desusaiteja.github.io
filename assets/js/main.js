/* Saiteja Desu — portfolio interactions */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── scroll reveal ─────────────────────────────── */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    document.documentElement.classList.add("no-observer");
  }

  /* ── ticking records counter ───────────────────── */
  var counterEl = document.getElementById("rec-counter");
  if (counterEl && !reducedMotion) {
    var count = 8431204117;
    setInterval(function () {
      count += Math.floor(Math.random() * 4200) + 800;
      counterEl.textContent = count.toLocaleString("en-US");
    }, 900);
  }
})();

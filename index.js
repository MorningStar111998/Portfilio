$(document).ready(function () {
  document
    .getElementById("frenchFlag")
    .addEventListener("click", function (event) {
      toggleDropdown();
    });

  function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown");

    if (dropdown.style.top === "0px" || dropdown.style.top === "") {
      dropdown.style.top = "100%";
      setTimeout(function () {
        dropdown.style.zIndex = "1";
      }, 500);
    } else {
      dropdown.style.zIndex = "-1";
      dropdown.style.top = "0";
    }
  }

  const faders = document.querySelectorAll(".fade-in");
  options = {
    threshold: 0.2,
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  options);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  $(document).ready(function () {
    $(".contact-me").click(function (event) {
      event.preventDefault();
      var target = $($(this).attr("href"));
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          700
        ); // You can adjust the duration for a faster or slower scroll
      }
    });
  });
});

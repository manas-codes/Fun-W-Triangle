const mainLink = document.querySelector("#main-link");
      mainLink.addEventListener("click", function(event) {
        event.preventDefault();
        const fragmentIdentifier = mainLink.getAttribute("href");
        const targetSection = document.querySelector("#content");
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
// Suche
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const projects = document.querySelectorAll(".project-card");

    searchInput.addEventListener("input", function () {
        const term = this.value.toLowerCase();

        
        projects.forEach((project) => {
            const text = project.innerText.toLowerCase();
            if (text.includes(term)) {
                project.style.display = "block";
                project.classList.add("highlight");
            } else {
                project.style.display = "none";
                project.classList.remove("highlight");
            }

            if (term === "") {
                project.classList.remove("highlight");
                project.style.display = "block";
            }
        });
    });

    // Lightbox
    document.querySelectorAll(".project-card img").forEach(img => {
        img.addEventListener("click", () => {
            document.getElementById("lightbox-img").src = img.src;
            document.getElementById("lightbox").style.display = "flex";
        });
    });

    document.getElementById("lightbox-close").addEventListener("click", () => {
        document.getElementById("lightbox").style.display = "none";
    });
});



function copyCoords(input) {
    input.select();
    input.setSelectionRange(0, 99999); // Für mobile Geräte
    navigator.clipboard.writeText(input.value);
  
    // Feedback anzeigen
    const coordsWrapper = input.parentElement;
    coordsWrapper.classList.add('show-feedback');
    setTimeout(() => {
      coordsWrapper.classList.remove('show-feedback');
    }, 1000);
  } 
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const projects = document.querySelectorAll(".project-card");

  searchInput.addEventListener("input", function () {
    const term = this.value.toLowerCase();

    projects.forEach((project) => {
      const text = project.innerText.toLowerCase();
      if (text.includes(term)) {
        project.style.display = "block";
        project.classList.add("highlight");
      } else {
        project.style.display = "none";
        project.classList.remove("highlight");
      }

      if (term === "") {
        project.classList.remove("highlight");
        project.style.display = "block";
      }
    });
  });

  document.querySelectorAll(".project-card img").forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("lightbox-img").src = img.src;
      document.getElementById("lightbox").style.display = "flex";
    });
  });

  document.getElementById("lightbox-close").addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "none";
  });
});

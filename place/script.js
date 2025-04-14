// Suche
document.getElementById("searchInput").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        const text = project.innerText.toLowerCase();
        project.style.display = text.includes(filter) ? "block" : "none";
    });
});

// Lightbox
document.querySelectorAll(".plan-img").forEach(img => {
    img.addEventListener("click", () => {
        document.getElementById("lightbox-img").src = img.src;
        document.getElementById("lightbox").style.display = "flex";
    });
});

document.getElementById("lightbox-close").addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const projects = document.querySelectorAll(".project");

    searchInput.addEventListener("input", function () {
        const term = this.value.toLowerCase();

        projects.forEach((project) => {
            const name = project.dataset.name.toLowerCase();
            if (name.includes(term)) {
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
});

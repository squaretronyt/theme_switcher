localStorage.getItem("theme") == "dark" && document.body.classList.add("dark");

const toggle = document.getElementById("toggle");

function showIcon() {
    if (document.body.classList.contains("dark")) {
        toggle.innerHTML = `<img src="img/sun.svg" alt="sun" />`;
    } else {
        toggle.innerHTML = `<img src="img/moon.svg" alt="moon" />`;
    }
}

showIcon();

toggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
    } else {
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
    }

    showIcon();
});

const items = document.querySelectorAll(".industry-item");
const searchInput = document.getElementById("searchInput");

// SEARCH FUNCTION
searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    items.forEach(item => {
        const name = item.dataset.name.toLowerCase();
        item.style.display = name.includes(value) ? "flex" : "none";
    });
});

// CATEGORY FILTER
function filterCategory(category) {

    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    items.forEach(item => {

        if (category === "all") {
            item.style.display = "block";
        }
        else {
            item.style.display = item.dataset.category === category ? "flex" : "none";
        }
    });
}
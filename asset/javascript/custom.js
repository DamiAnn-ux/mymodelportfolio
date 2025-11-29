document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-category]");
  const dropdownLinks = document.querySelectorAll(".dropdown-item[data-filter]");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const portfolioSection = document.getElementById("portfolio");

  let currentFilter = "none"; // Track active filter

  function filterShow(category) {
    // If you click the same filter again → toggle off (hide everything)
    if (currentFilter === category) {
      currentFilter = "none";
      portfolioItems.forEach(item => item.style.display = "none");
      return;
    }

    currentFilter = category;

    portfolioItems.forEach(item => {
      const cat = item.getAttribute("data-category");
      if (category === "all" || cat === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Filter Buttons Inside Portfolio Section
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      filterShow(category);
    });
  });

  // Navbar Dropdown
  dropdownLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    //   smooth scroll to portfolio every time before filtering
      const category = link.getAttribute("data-filter");

      filterShow(category);

      // smooth scroll to portfolio
      portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Initial State = hide all
  filterShow("none");
});
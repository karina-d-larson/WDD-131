// ===== DATA =====
const bakeryItems = [
  {
    name: "Moonlight Cupcake",
    category: "dessert",
    description: "A soft vanilla cupcake glowing with moon sugar.",
    img: "imgs/cupcake.png"
  },
  {
    name: "Forest Berry Tart",
    category: "dessert",
    description: "Filled with enchanted berries from the woods.",
    img: "imgs/tart.png"
  },
  {
    name: "Golden Honey Bread",
    category: "bread",
    description: "Warm bread infused with magical honey.",
    img: "imgs/bread.png"
  },
  {
    name: "Mystic Tea",
    category: "drink",
    description: "A calming tea with glowing herbs.",
    img: "imgs/tea.png"
  }
];

// ========================= HOME PAGE SCRIPTS =========================
const specialContainer = document.getElementById("special-item");
const specialButton = document.getElementById("special-btn");

if (specialContainer && specialButton) { // Check to make sure correct page
  // ===== RANDOM ITEM FUNCTION =====
  function getRandomItem(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
  }

  // ===== DISPLAY FUNCTION =====
  function displayItem(item) {
    specialContainer.innerHTML = `
      <img src="${item.img}" alt="${item.name}" style="width:100%; border-radius:10px;">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;
  }

  // ===== EVENT LISTENER =====
  specialButton.addEventListener("click", () => {
    if (bakeryItems.length > 0) {
      const randomItem = getRandomItem(bakeryItems);
      displayItem(randomItem);
    }
  });
}

// ========================= MENU PAGE SCRIPTS =========================
const menuContainer = document.getElementById("menu-container");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-buttons button");

if (menuContainer && searchInput && filterButtons.length > 0) { // Check to make sure correct page
  // ===== FUNCTIONS =====

  // Render menu items
  function renderMenu(items) {
    menuContainer.innerHTML = ""; // clearing container
    items.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="menu-img">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;

      menuContainer.appendChild(card);
    });
  }

  // Filter by category
  function filterByCategory(category) {
      const filtered = bakeryItems.filter(item => item.category === category);
      renderMenu(filtered);
  }

  // Search by name
  function searchItems(query) {
    const lowerQuery = query.toLowerCase();
    const filtered = bakeryItems.filter(item => item.name.toLowerCase().includes(lowerQuery));
    renderMenu(filtered);
  }

  // ===== EVENT LISTENERS =====

  // Category buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      filterByCategory(category);
    });
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    searchItems(e.target.value);
  });

  // ===== INITIAL RENDER =====
  renderMenu(bakeryItems);
}
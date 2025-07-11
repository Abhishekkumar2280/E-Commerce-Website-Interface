
    const products = [
      "Smartphone",
      "Laptop",
      "Sneakers",
      "Backpack",
      "Wireless Earbuds",
      "Coffee Mug",
      "Gaming Mouse"
    ];

    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      searchResults.innerHTML = "";

      if (query.trim() === "") return;

      const filtered = products.filter(product =>
        product.toLowerCase().includes(query)
      );

      filtered.forEach(product => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = product;
        searchResults.appendChild(li);
      });

      if (filtered.length === 0) {
        searchResults.innerHTML = `<li class="list-group-item text-muted">No products found</li>`;
      }
    });

    // No custom JS needed now, but this file is ready for future enhancements

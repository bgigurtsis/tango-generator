// js/modules/generator.js

// Create the settings checkboxes dynamically based on the configuration file.
export function createCategorySettings(config) {
  const container = document.getElementById('categorySettings');
  container.innerHTML = '';
  config.categories.forEach(category => {
    const div = document.createElement('div');
    div.className = 'category-item';
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `cat-${category.id}`;
    checkbox.checked = category.enabled;
    label.appendChild(checkbox);
    label.append(` ${category.name}`);
    div.appendChild(label);
    container.appendChild(div);
  });
}

// Retrieve an array of category IDs that are selected (checked) in the settings.
export function getSelectedCategories() {
  const selected = [];
  const checkboxes = document.querySelectorAll('#categorySettings input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      // Remove the "cat-" prefix to get the category ID.
      selected.push(checkbox.id.replace('cat-', ''));
    }
  });
  return selected;
}

// Generate an array of instructions by randomly selecting one item from each active category.
export function generateInstructions(count, config, selectedCategories) {
  const instructions = [];
  // Filter and preserve the order of active categories as defined in config.json.
  const activeCategories = config.categories.filter(cat => selectedCategories.includes(cat.id));
  for (let i = 0; i < count; i++) {
    let parts = [];
    activeCategories.forEach(category => {
      parts.push(randomItem(category.items));
    });
    instructions.push(parts.join(' - '));
  }
  return instructions;
}

// Helper function: return a random element from an array.
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

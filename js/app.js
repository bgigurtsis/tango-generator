// js/app.js
import { createCategorySettings, getSelectedCategories, generateInstructions } from './generator.js';

let config = null;

// Load the configuration from config.json
async function loadConfig() {
  try {
    const response = await fetch('config.json');
    if (!response.ok) throw new Error('Could not load config.json');
    config = await response.json();
    // Populate the category settings checkboxes based on config
    createCategorySettings(config);
  } catch (error) {
    console.error('Error loading configuration:', error);
  }
}

// Listen for the "Generate Instructions" button click
document.getElementById('generateButton').addEventListener('click', () => {
  const count = parseInt(document.getElementById('instructionCount').value);
  const selectedCategories = getSelectedCategories();
  const instructions = generateInstructions(count, config, selectedCategories);
  displayInstructions(instructions);
});

// Display the generated instructions in the result container
function displayInstructions(instructions) {
  const container = document.getElementById('resultContainer');
  container.innerHTML = '';
  instructions.forEach((instr, idx) => {
    const p = document.createElement('p');
    p.textContent = `${idx + 1}. ${instr}`;
    container.appendChild(p);
  });
}

loadConfig();

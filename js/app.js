import { createCategorySettings, generateInstructions } from './generator.js';

let config = null;

async function loadConfig() {
  try {
    const response = await fetch('config.json');
    config = await response.json();
    createCategorySettings(config);
    loadSavedCounts();
  } catch (error) {
    console.error('Error loading config:', error);
  }
}

function loadSavedCounts() {
  const saved = localStorage.getItem('categoryCounts');
  if (saved) {
    const counts = JSON.parse(saved);
    config.categories.forEach(category => {
      const select = document.getElementById(`count-${category.id}`);
      if (select && counts[category.id] !== undefined) {
        select.value = counts[category.id];
      }
    });
  }
}

function saveCounts() {
  const counts = {};
  config.categories.forEach(category => {
    counts[category.id] = document.getElementById(`count-${category.id}`).value;
  });
  localStorage.setItem('categoryCounts', JSON.stringify(counts));
}

document.getElementById('generateButton').addEventListener('click', () => {
  saveCounts();
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '';
  const instructions = generateInstructions(config);
  
  instructions.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = `item ${item.category} ${config.categories.find(c => c.id === item.category).color}`;
    div.textContent = item.text;
    resultContainer.appendChild(div);
    
    if (index < instructions.length - 1) {
      const arrow = document.createElement('div');
      arrow.className = 'arrow';
      arrow.textContent = '↓';
      resultContainer.appendChild(arrow);
    }
  });
});

loadConfig();
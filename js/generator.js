export function createCategorySettings(config) {
  const container = document.getElementById('categorySettings');
  container.innerHTML = '';
  
  config.categories.forEach(category => {
    const div = document.createElement('div');
    div.className = 'category-item';
    
    const label = document.createElement('label');
    label.textContent = `${category.name} items:`;
    
    const select = document.createElement('select');
    select.id = `count-${category.id}`;
    
    for(let i = 0; i <= 5; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      if (i === 1) option.selected = true;
      select.appendChild(option);
    }
    
    div.appendChild(label);
    div.appendChild(select);
    container.appendChild(div);
  });
}

export function generateInstructions(config) {
  const instructions = [];
  
  config.categories.forEach(category => {
    const count = parseInt(document.getElementById(`count-${category.id}`).value);
    for (let i = 0; i < count; i++) {
      instructions.push({
        text: randomItem(category.items),
        category: category.id
      });
    }
  });
  
  return instructions;
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
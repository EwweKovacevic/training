const li1 = document.getElementById('li1');
const inputID = document.getElementById('inputID').value;
const btn = document.getElementById('btn');

// ✅ Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = '';

  if (li1.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    li1.textContent = 'inputID';
  } else {
    li1.textContent = initialText;
  }
});

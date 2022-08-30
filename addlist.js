const li1 = document.getElementById('li1');
const inputID = document.getElementById('inputID').value;

// ✅ Toggle button text on click
li1.addEventListener('click', function handleClick() {
  const initialText = '';

  if (li1.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    li1.textContent = 'inputID';
  } else {
    li1.textContent = initialText;
  }
});

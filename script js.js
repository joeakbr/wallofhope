const form = document.getElementById('hopeForm');
const wall = document.getElementById('wall');
const formSection = document.getElementById('form-section');

function toggleForm() {
  formSection.classList.toggle('hidden');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim() || "Anonim";
  const text = document.getElementById('hopeText').value.trim();
  const genre = document.getElementById('genre').value;

  if (text === "") return;

  const hope = {
    name,
    text,
    genre,
    date: new Date().toLocaleDateString("id-ID")
  };

  displayHope(hope);
  form.reset();
  formSection.classList.add('hidden');
});

function displayHope(hope) {
  const card = document.createElement('div');
  card.className = 'hope-card';
  card.innerHTML = `
    <strong>${hope.genre}</strong><br/>
    <em>${hope.name}</em> - ${hope.date}<br/><br/>
    ${hope.text}
  `;
  wall.prepend(card); // Harapan terbaru di atas
}

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.c-card')

for (let card of cards) {
  card.addEventListener("click", function() {
    modalOverlay.classList.add('active')
  })
}
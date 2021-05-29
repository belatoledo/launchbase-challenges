const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.c-card')

for (let card of cards) {
  card.addEventListener("click", function(){
    modalOverlay.classList.add('active')
  })
}

document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove('active')
})

if (modal.classList.contains('max-modal') != true) {
  document.querySelector('.maximize-button').addEventListener("click", function() {
    modal.classList.toggle('max-modal')
  })
 } /*else {
  document.querySelector('.maximize-button').addEventListener("click", function() {
    modal.classList.remove('max-modal')
  })
}*/
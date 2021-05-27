const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.c-card')

for (let card of cards) {
  card.addEventListener("click", function(){
    modalOverlay.classList.add('active')
  })
}

document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove('active')
})

const maximizeModal = document.querySelector('.modal')
  
  if(maximizeModal.classList.contains('maximize' === false)) {
    document.querySelector('.maximize-modal').addEventListener("click", function() {
      maximizeModal.classList.add('maximize')
    })
  }




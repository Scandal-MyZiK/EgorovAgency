document.addEventListener('DOMContentLoaded', () => {
    let date = new Date('Jul 24 2023 00:00:00');
    function counts() {
        let now = new Date();
        gap = date - now;

        let days = Math.floor(gap / 1000 / 60 / 60/ 24);
        let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
        let minutes = Math.floor(gap / 1000 / 60 ) % 60;
        let seconds = Math.floor(gap / 1000 ) % 60;

        if (gap < 0) {
            document.getElementById('group').innerText = 'Time is over';
        }else{
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minuts').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        }
    }
    counts();
    setInterval(counts, 1000);

    const input = document.querySelector('.footer__input');
    const form = document.querySelector('.footer__form');
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    form.addEventListener('submit', submitForm);
    async function submitForm(e) {
        e.preventDefault();
        let formData = new FormData(form);
        if (isEmailValid(input.value)) {
          input.style.borderColor = 'none';
          let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
          })
          if (response.ok) {
            form.reset();
            openModal('success');
          } else {
            openModal("error")
          }
        } else {
          input.style.borderColor = 'red';
        }
      }
      function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    function openModal(type) {
      let modal = document.querySelector('.popup');
      let title = document.querySelector('.popup__title');
      let text = document.querySelector('.popup__text');
      if (type == 'success') {
        title.innerText = 'SUCCESS!';
        text.innerText = 'You have successfully subscribed to the email newsletter';
      } else {
        title.innerText = 'Error';
        text.innerText = 'Something wrong';
      }
      let closeBtns = document.querySelectorAll('.popup__close');
      closeBtns.forEach((btn) =>{
        btn.addEventListener('click', () =>{
          modal.classList.remove('active');
        })
      })
      modal.classList.add('active');
      setTimeout(() => {
        modal.classList.remove('active');
      }, 8000)
    }
});
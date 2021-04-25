const testimoniesField = document.getElementById('testimonials');
const testimonies = document.querySelectorAll('.testimonials article');

const indicators = document.querySelectorAll('.testimonials .dots li');
const names = document.querySelectorAll('.testimonials .names li')
index = 0;
let clicked = false;
let i = 0
indicators.forEach((indicator) => {
      indicator.addEventListener('click', () => {
            clearInterval();
            clicked = true;
            let previous = document.querySelector('.testimonials .selected')
            document.querySelector(`.testimonials  .${previous.classList[0]}`).style.display = 'none';
            document.querySelector(`.testimonials  .names .${previous.classList[0]}`).classList.remove("show")
            document.querySelector('.testimonials .selected').classList.remove('selected');
            document.querySelector(`.testimonials .names .${indicator.classList[0]}`).classList.add("show")
            
            
            indicator.classList.add('selected');

            document.querySelector(`.testimonials  .${indicator.classList[0]}`).style.display = 'block';

      });
});


setInterval(function () {
      document.querySelector(`.testimonials  .show`).classList.remove('show')
      document.querySelector('.testimonials .selected').classList.remove('selected');
      indicators[i].classList.add('selected')
      document.querySelector(`.testimonials  .${indicators[i].classList[0]}`).classList.add('show')
     i++;
      if (i > 2) {
            i = 0
      }
}, 5000);
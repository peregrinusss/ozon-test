const progressBars = document.querySelectorAll('.prog')

if (progressBars.length != 0) {
  window.onload = function() {
    progressBars.forEach((progressBar) => {
      progressBar.classList.add('loaded')
    })
  }

  progressBars.forEach((progressBar) => {
    const circle = progressBar.querySelector('.prog-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const input = progressBar.querySelector('#prog_value');
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    
    function setProgress(percent) {
      const offset = circumference - percent / 100 * circumference;
      circle.style.strokeDashoffset = offset;
    }
    
    setProgress(60);
    
    input.addEventListener('input', function () {
      setProgress(input.value);
    });


    // min max value of value input
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('input', (e) => {
      const value = +input.value;
      if (value > max) { input.value = max }
      else if (value < min) { input.value = min }
    })


    // Checkboxes
    const progAnimate = progressBar.querySelector('#prog_animate')
    const progHide = progressBar.querySelector('#prog_hide')

    progAnimate.addEventListener('change', function() {
      if (this.checked) {
        progressBar.classList.add('animated')
      } else {
        progressBar.classList.remove('animated')
      }
    })

    progHide.addEventListener('change', function() {
      if (this.checked) {
        progressBar.classList.add('hidden')
      } else {
        progressBar.classList.remove('hidden')
      }
    })
  })
}
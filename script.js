function changecss() {
  var x = document.getElementById("stylesheet");
  var toggle=document.getElementById("toggler");
  if(toggle.checked){
    x.href = "profstyle.css";
  }
  else{
    x.href = "style.css";
  }
 
}
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for navigation links
  document.querySelectorAll('.scroll-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (!targetElement) {
        console.error('Target element not found');
        return;
      }

      // Dynamically get the height of the navigation bar
      const navBar = document.querySelector('nav');
      const navBarHeight = navBar ? parseFloat(getComputedStyle(navBar).height) : 0;

      const targetPosition = targetElement.offsetTop - navBarHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // Adjust the duration of the scroll (in milliseconds)

      let start = null;
      function scrollAnimation(currentTime) {
        if (start === null) start = currentTime;
        const progress = currentTime - start;

        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(scrollAnimation);
    });
  });
});




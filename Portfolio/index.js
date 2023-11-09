const slider = document.querySelector('.scroll-parent');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

(function() {
  for (var tags = ['div', 'figure', 'figcaption'], i = 0; i < tags.length; i++) {
    document.createElement(tags[i]);
  }
})();

(function() {
  if (typeof(window.getComputedStyle) == 'undefined') {
    return;
  }


  var pre = document.getElementsByTagName('pre');
  for (var len = pre.length, i = 0; i < len; i++) {
    var code = pre[i].getElementsByTagName('code').item(0);
    if (!code) {
      code = pre[i].getElementsByTagName('samp').item(0);
      if (!code) {
        continue;
      }
    }


    var column = document.createElement('div');
    column.setAttribute('aria-hidden', 'true');
    column.setAttribute('class', 'numbers');

    for (var n = 0; n < code.innerHTML.split(/[\n\r]/g).length; n++) {
      column.appendChild(document.createElement('span'));
    }


    pre[i].insertBefore(column, code);


    pre[i].className = 'line-numbers';
  }

})();


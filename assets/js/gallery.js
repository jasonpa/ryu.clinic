(function () {
  var gallery = document.querySelector('[data-gallery]');
  if (!gallery) return;

  var frame = gallery.querySelector('.gallery-frame');
  var panels = Array.prototype.slice.call(gallery.querySelectorAll('.gallery-panel'));
  var tabs = Array.prototype.slice.call(gallery.querySelectorAll('.gallery-tabs button'));
  var titleEl = gallery.querySelector('[data-gallery-title]');
  var lineEl = gallery.querySelector('[data-gallery-line]');
  var index = 0;
  var timer = null;
  var transitionTimer = null;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (panels.length === 0) return;

  if (titleEl) titleEl.textContent = panels[0].dataset.title || '';
  if (lineEl) lineEl.textContent = panels[0].dataset.line || '';

  function activate(next) {
    if (next === index) return;
    var previous = index;
    var direction = (next - previous + panels.length) % panels.length;
    gallery.dataset.direction = direction > panels.length / 2 ? 'prev' : 'next';
    if (transitionTimer) window.clearTimeout(transitionTimer);
    panels.forEach(function (p) { p.classList.remove('was-active'); });
    var outgoing = panels[previous];
    if (outgoing) outgoing.classList.add('was-active');
    gallery.classList.add('is-switching');
    transitionTimer = window.setTimeout(function () {
      gallery.classList.remove('is-switching');
      if (outgoing) outgoing.classList.remove('was-active');
      transitionTimer = null;
    }, 920);
    index = next;
    panels.forEach(function (p, i) {
      var active = i === index;
      p.classList.toggle('is-active', active);
      p.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    tabs.forEach(function (t, i) {
      var active = i === index;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (titleEl) titleEl.textContent = panels[index].dataset.title || '';
    if (lineEl) lineEl.textContent = panels[index].dataset.line || '';
  }

  function start() {
    if (reduceMotion || timer) return;
    timer = window.setInterval(function () { activate((index + 1) % panels.length); }, 5000);
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      stop();
      activate(i);
    });
  });

  if (frame) {
    var dragStartX = null;
    frame.addEventListener('pointerdown', function (e) { dragStartX = e.clientX; });
    frame.addEventListener('pointerup', function (e) {
      if (dragStartX === null) return;
      var delta = e.clientX - dragStartX;
      dragStartX = null;
      if (Math.abs(delta) < 30) return;
      stop();
      activate(delta < 0
        ? (index + 1) % panels.length
        : (index - 1 + panels.length) % panels.length);
    });
    frame.addEventListener('mouseleave', function () { dragStartX = null; });
  }

  panels.forEach(function (p, i) {
    p.classList.toggle('is-active', i === 0);
    p.setAttribute('aria-hidden', i === 0 ? 'false' : 'true');
  });

  start();
})();

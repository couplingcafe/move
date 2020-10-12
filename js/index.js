document.addEventListener('DOMContentLoaded', () => {
  amp().logEvent('Page View');
  initLoaded();
});

function amp () { return amplitude.getInstance(); }

function initLoaded () {
  let fontLoaded = false;
  let imgLoaded = false;

  document.fonts.ready.then(() => {
    fontLoaded = true;
    tryLoad();
  });

  const img = document.querySelector('img.hero');
  if (!img) {
    imgLoaded = true;
  }
  else {
    if (!img.complete || img.naturalWidth === 0) {
      img.onload = () => {
        imgLoaded = true;
        tryLoad();
      };
    } else {
      imgLoaded = true;
      tryLoad();
    }
  }

  function tryLoad () {
    if (fontLoaded && imgLoaded) {
      document.body.classList.add('loaded');
    }
  }
}

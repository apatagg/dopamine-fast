import blurredImage from '@assets/img/blurred.svg';

let observer = null;

export function blurAllMedia() {
  document.body.classList.add('blur-all-media');

  blurAllElements();
  if (!observer) {
    // Create a dom mutation observer to detect any new elements with background property to re-blur
    observer = new MutationObserver(() => {
      blurAllElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}

function blurAllElements() {
  const elements = document.querySelectorAll('div');
  elements.forEach((element) => {
    const cssStyle = window.getComputedStyle(element);
    if (element.classList.contains('background-updated')) return;
    if (!cssStyle.background.includes('url(')) return;

    element.classList.add('background-updated');
    element.dataset.originalBackground = cssStyle.background;

    element.addEventListener('mouseover', () => {
      element.style.background = element.dataset.originalBackground;
    });

    element.addEventListener('mouseout', () => {
      element.style.background = `url('${chrome.runtime.getURL(
        blurredImage
      )}')`;
    });

    element.style.background = `url('${chrome.runtime.getURL(blurredImage)}')`;
  });
}

export function removeBlurAllMedia() {
  document.body.classList.remove('blur-all-media');

  const elements = document.querySelectorAll(
    '.background-updated'
  ) as NodeListOf<HTMLElement>;
  elements.forEach((element) => {
    element.style.background = element.dataset.originalBackground;
    element.classList.remove('background-updated');
    delete element.dataset.originalBackground;
  });

  observer.disconnect();
}

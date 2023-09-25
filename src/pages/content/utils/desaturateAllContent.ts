export function desaturateAllContent() {
  const div = document.createElement('div');
  div.id = 'desaturate-all-content';
  document.body.appendChild(div);
}

export function removeDesaturateAllContent() {
  const div = document.getElementById('desaturate-all-content');
  if (div) {
    div.remove();
  }
}

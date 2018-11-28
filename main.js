function scrollToAbstract() {
  document.getElementById('abstract-page').scrollIntoView(true);
  window.scrollBy(0, -70);
}

function scrollToAnalysis() {
  document.getElementById('analysis-page').scrollIntoView(true);
  window.scrollBy(0, -70);
}

function scrollToComputation() {
  document.getElementById('computation-page').scrollIntoView(true);
  window.scrollBy(0, -70);
}

function scrollToConclusion() {
  document.getElementById('conclusion-page').scrollIntoView(true);
  window.scrollBy(0, -70);
}

function menuControls(){
  if (!isHidden(document.querySelector('.hamburger-menu'))) {
    document.querySelector('.hamburger-menu').setAttribute('style', 'display:none;');
  } else {
    document.querySelector('.hamburger-menu').setAttribute('style', 'display:block;');
  }
}

function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

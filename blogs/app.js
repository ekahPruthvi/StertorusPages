let previousIndex = null;
let currentIndex = null;

function expandFolder(i) {
  previousIndex = currentIndex;
  currentIndex = i;
  console.log(previousIndex)

  document.getElementById('legend').style.visibility = 'hidden';
  document.getElementById('index').style.visibility = 'hidden';

  document.querySelectorAll('.folder-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-tab-body').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-content').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-tab-body')[i-1].classList.add('active');
  document.querySelectorAll('.folder-tab')[i-1].classList.add('active');
  document.getElementById('folder-content-' + i).classList.add('active');
}

// expandFolder(0);
// currentIndex = 0
pageMove(1.2)

function pageMove(i) {
  previousIndex = currentIndex;
  currentIndex = i;
  console.log(previousIndex)
  document.querySelectorAll('.folder-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-tab-body').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-content').forEach(e => e.classList.remove('active'));
  document.getElementById('inner-link-page-' + i).classList.add('active');
}

function goBack() {
  if (previousIndex === null) return;

  if (previousIndex % 1 !== 0) {
    pageMove(previousIndex);
  } else {
    expandFolder(parseInt(previousIndex));
  }
}

document.addEventListener('keydown', function (event) {
  if (event.altKey && event.code === 'ArrowLeft') {
    event.preventDefault();
    goBack();
  }
  if (event.key === '?') {
    event.preventDefault();

    const legend = document.getElementById('legend');

    if (legend.style.visibility === 'hidden') {
      legend.style.visibility = 'visible';
    } else {
      legend.style.visibility = 'hidden';
    }
  }
  if (event.key === 'i' || event.key === 'I') {
    event.preventDefault();

    const legend = document.getElementById('index');

    if (legend.style.visibility === 'hidden') {
      legend.style.visibility = 'visible';
    } else {
      legend.style.visibility = 'hidden';
    }
  }
});

function bob(e) {
  document.getElementById('index').style.visibility = 'hidden';
  document.getElementById('legend').style.visibility = 'hidden';
}

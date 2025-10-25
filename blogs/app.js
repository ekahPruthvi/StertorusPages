let current = null;
function expandFolder(i) {
  document.querySelectorAll('.folder-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-tab-body').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-content').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-tab-body')[i].classList.add('active');
  document.querySelectorAll('.folder-tab')[i].classList.add('active');
  document.getElementById('folder-content-' + i).classList.add('active');
}

expandFolder(0);

function pagemove(i) {
  document.querySelectorAll('.folder-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-tab-body').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.folder-content').forEach(e => e.classList.remove('active'));
  document.getElementById('inner-link-page-' + i).classList.add('active');
}


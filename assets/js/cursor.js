function AddAnimatedCircle() {
  const circle = document.getElementById('circleId');
  document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    });
  });
}

AddAnimatedCircle();

const flower = document.querySelector(".flower");
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 200 + 50;
  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";
  particle.style.setProperty("--dx", dx);
  particle.style.setProperty("--dy", dy);
  const size = Math.random() * 8 + 4 + "px";
  particle.style.width = size;
  particle.style.height = size;
  particle.style.left = "50%";
  particle.style.top = "50%";
  particle.style.transform = "translate(-50%, -50%)";
  flower.appendChild(particle);
  particle.addEventListener("animationend", () => {
    particle.remove();
  });
}
setInterval(createParticle, 250);

let current_c_count = 0;

function c() {
  current_c_count++;
  console.log(current_c_count);
  if (current_c_count === 7) {
    document.getElementById('flowy').style.visibility = 'visible';
    console.log("This flower belongs to C. If found please return to the owner");
  }
}

const indi = document.getElementById('indi');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    const windowHeight = window.innerHeight;
    
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight) {
      console.log('You have reached the bottom of the page!');
      indi.style.visibility = 'visible';
      indi.textContent = 'goto to projects ►';
    } else {
      indi.style.visibility = 'hidden';
    }
});
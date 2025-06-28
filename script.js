const canvas = document.getElementById('canvas');
const fragments = document.querySelectorAll('.fragment');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  fragments.forEach((frag, i) => {
    const intensity = (i + 1) * 10;
    frag.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
  });
});


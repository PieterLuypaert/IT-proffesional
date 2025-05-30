const container = document.createElement("div");
container.classList.add("background-container");

for (let i = 0; i < 50; i++) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.style.left = `${Math.random() * 100}vw`;
  line.style.animationDuration = `${Math.random() * 3 + 2}s`;
  line.style.animationDelay = `${Math.random() * 2}s`;
  container.appendChild(line);
}

document.body.appendChild(container);

document.body.appendChild(container);

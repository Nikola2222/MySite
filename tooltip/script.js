let fireScript = document.createElement('script');
fireScript.src = "https://cdn.jsdelivr.net/npm/fireworks-js@2.x/dist/index.umd.js";
document.head.append(fireScript);

let container = document.createElement('div');
container.style.width = '100%';
container.style.height = '100%';
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
document.body.append(container);
const fireworks = new Fireworks.default(container);
fireworks.start()

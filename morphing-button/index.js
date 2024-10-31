const id = setInterval(() => {
  setState();
}, 2000);

document.body.onclick = () => {
  clearInterval(id);
  setState();
};

let toggled = false;
const toggle = () => {
  if (toggled) {
    container.appendChild(btn2);
    if (container.contains(btn1)) document.body.appendChild(btn1);
  } else {
    container.appendChild(btn1);
    if (container.contains(btn2)) document.body.appendChild(btn2);
  }
  toggled = !toggled;
};

function setState() {
  if (!document.startViewTransition) {
    toggle();
  } else {
    document.startViewTransition(() => {
      toggle();
    });
  }
}

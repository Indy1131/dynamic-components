for (const dropdown of document.querySelectorAll(".dropdown")) {
  const button = dropdown.querySelector("button");
  const actions = dropdown.querySelector(".actions");

  let open = false;

  button.addEventListener("click", () => {
    if (open) {
      actions.style.display = "none";
    } else {
      actions.style.display = "flex";
    }

    open = !open;
  });
}

for (const carousel of document.querySelectorAll(".carousel")) {
  const container = carousel.querySelector(".container");

  let pane = 0;

  const back = carousel.querySelector(".back");
  back.style.visibility = "hidden";
  back.addEventListener("click", () => {
    pane--;
    forward.style.visibility = "visible";

    if (pane == 0) {
      back.style.visibility = "hidden";
    }
    container.style.transform = `translateX(-${(100 / panes.length) * pane}%)`;
  });

  const forward = carousel.querySelector(".forward");
  forward.addEventListener("click", () => {
    back.style.visibility = "visible";
    pane++;

    if (pane == panes.length - 1) {
      forward.style.visibility = "hidden";
    }

    container.style.transform = `translateX(-${(100 / panes.length) * pane}%)`;
  });

  const panes = container.children;
  container.style.width = `${panes.length * 100}%`;
}

const interestsMain = document.querySelector(".interests_main");

interestsMain.addEventListener("change", (event) => {
  let target = event.target;
  if (target.classList.contains("interest__check")) {
    if (target.closest("label").nextElementSibling) {
      childrenCheck(target);
    } else if (target.closest(".interests_active")) {
      parentCheck(target);
    }
  }
});

function childrenCheck(element) {
  const inputs = [
    ...element.closest("label").nextElementSibling.querySelectorAll("input"),
  ];
  element.checked
    ? inputs.forEach((el) => (el.checked = true))
    : inputs.forEach((el) => (el.checked = false));
  parentCheck(element);
}
function parentCheck(element) {
  if (!element.closest(".interests_active")) {
    return;
  }
  const subChecksBlock = element.closest(".interests_active");
  const inputs = [...subChecksBlock.querySelectorAll("input")];
  const parent = subChecksBlock.closest(".interest").querySelector("input");

  if (inputs.every((el) => el.checked)) {
    parent.checked = true;
    parent.indeterminate = false;
  } else if (inputs.every((el) => el.checked === false)) {
    parent.checked = false;
    parent.indeterminate = false;
  } else {
    parent.indeterminate = true;
  }
  parentCheck(parent);
}

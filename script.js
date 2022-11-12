"use strict";
(function () {
  const screen = document.querySelector(".screen");
  const btns = document.querySelectorAll(".btn");
  const clear = document.querySelector(".btn-clear");
  const equal = document.querySelector(".btn-equal");
  btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      // console.log(value);
      screen.value += value;
    });
    equal.addEventListener("click", (e) => {
      if (screen.value === "") {
        screen.value = "Please Enter";
      } else {
        let ans = eval(screen.value);
        screen.value = ans;
      }
    });
    clear.addEventListener("click", () => {
      screen.value = null;
    });
  });
})();

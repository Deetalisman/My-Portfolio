const tab = document.querySelector(".tab");
const panel = document.querySelectorAll(".panel");
tab.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panel.forEach(function (panel) {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});

const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".header ul");
const close = document.querySelector(".close");
ham.addEventListener("click", () => {
  nav.style.display = "block";
  ham.style.display = "none";
  close.style.display = "block";
});
function closes() {
  nav.style.display = "none";
  close.style.display = "none";
  ham.style.display = "block";
}
close.addEventListener("click", () => {
  nav.style.display = "none";
  close.style.display = "none";
  ham.style.display = "block";
});

const skill = document.querySelector("#ski");
const exp = document.querySelector("#exp");
const edu = document.querySelector("#edu");
skill.addEventListener("click", function (e) {
  skill.classList.add("tabact");
  exp.classList.remove("tabact");
  edu.classList.remove("tabact");
});
edu.addEventListener("click", function (e) {
  edu.classList.toggle("tabact");
  exp.classList.remove("tabact");
  skill.classList.remove("tabact");
});
exp.addEventListener("click", function (e) {
  exp.classList.toggle("tabact");
  skill.classList.remove("tabact");
  edu.classList.remove("tabact");
});

const more = document.querySelector("#more");
const less = document.querySelector("#less");
const see = document.querySelectorAll(".see");
more.addEventListener("click", function (e) {
  for (let se of see) {
    se.style.display = "block";
  }
  more.style.display = "none";
  less.style.display = "block";
});
less.addEventListener("click", function (e) {
  for (let se of see) {
    se.style.display = "none";
  }
  more.style.display = "block";
  less.style.display = "none";
});
//------------React and vanilla--------------//

const vanilla = document.querySelector(".va");
const react = document.querySelector(".re");
const reactProj = document.querySelector(".REACT");
const vanillaProj = document.querySelector(".VANILLA");
react.addEventListener("click", () => {
  react.classList.add("proj");
  vanilla.classList.remove("proj");
  reactProj.style.display = "flex";
  vanillaProj.style.display = "none";
});
vanilla.addEventListener("click", () => {
  react.classList.remove("proj");
  vanilla.classList.add("proj");
  reactProj.style.display = "none";
  vanillaProj.style.display = "flex";
});

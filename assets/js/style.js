function clock() {
  let x = new Date();
  let format = `${formatjam(x.getDate())}/${formatjam(
    x.getMonth()
  )}/${formatjam(x.getFullYear())}  ${formatjam(x.getHours())}:${formatjam(
    x.getMinutes()
  )}:${formatjam(x.getSeconds())}`;
  let time = 1000;

  document.getElementById("jam").innerHTML = format;
  setTimeout("clock()", time);
}
function formatjam(p) {
  return p < 10 ? `0${p}` : p;
}

function dropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

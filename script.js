document.addEventListener("DOMContentLoaded", () => {
  const readBtn = document.getElementById("read-btn");
  const intro = document.getElementById("intro-screen");
  const device = document.getElementById("device-screen");

  readBtn.addEventListener("click", () => {
    intro.style.display = "none";
    device.style.display = "block";
  });
});

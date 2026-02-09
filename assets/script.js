// اهتزاز خفيف عند الخطأ
function shake(el) {
  el.style.animation = "shake 0.3s";
  setTimeout(() => el.style.animation = "", 300);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.opacity = "0.7";
      setTimeout(() => btn.style.opacity = "1", 200);
    });
  });
});

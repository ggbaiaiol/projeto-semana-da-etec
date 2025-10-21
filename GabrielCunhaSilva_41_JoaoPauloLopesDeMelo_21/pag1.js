document.addEventListener("DOMContentLoaded", function () {
    const botaoModo = document.getElementById("toggleModo");
  
    if (localStorage.getItem("tema") === "dark") {
      document.body.classList.add("dark-mode");
      if (botaoModo) botaoModo.innerText = "☀️";
    }
  
    if (botaoModo) {
      botaoModo.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
  
        const modoAtivo = document.body.classList.contains("dark-mode");
        botaoModo.innerText = modoAtivo ? "☀️" : "🌙";
        localStorage.setItem("tema", modoAtivo ? "dark" : "light");
      });
    }
  });
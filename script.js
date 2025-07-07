function showMessage() {
document.getElementById("message").textContent = "Willkommen bei ImmoVesta!";
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Previene l'invio reale
  alert("✅ Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.");
  this.reset(); // Resetta i campi del modulo
});

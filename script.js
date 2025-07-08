function showMessage() {
document.getElementById("message").textContent = "Willkommen bei ImmoVesta!";
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Previene l'invio reale
  alert("✅ Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.");
  this.reset(); // Resetta i campi del modulo
});
<script>
  function toggleSection(id) {
    const panels = document.querySelectorAll(".legal-panel");
    panels.forEach(panel => {
      panel.style.display = "none";
    });
    const selected = document.getElementById(id);
    if (selected) selected.style.display = "block";
  }
</script>

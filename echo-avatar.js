// echo-avatar.js
async function sendToEcho() {
    const input = document.getElementById("user-input").value;
    if (!input.trim()) return;

    // Simuleer AI-response (hier kan een echte AI-API aangeroepen worden)
    alert("Echo zegt: " + input);
}

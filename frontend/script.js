const apiURL = "https://YOUR_CLOUD_RUN_URL"; // Replace with your deployed URL

async function sendMessage() {
    let msg = document.getElementById("msgInput").value;
    await fetch(apiURL + "/add_message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: msg }),
    });
    fetchMessages();
}

async function fetchMessages() {
    let res = await fetch(apiURL + "/get_messages");
    let messages = await res.json();
    document.getElementById("messages").innerHTML = messages.map(m => `<li>${m.text}</li>`).join("");
}

fetchMessages();

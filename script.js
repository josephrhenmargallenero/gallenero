document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const status = document.getElementById("status");
    status.innerText = "Sending...";

    try {
        const res = await fetch("YOUR_WORKER_URL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value,
                message: e.target[2].value
            })
        });

        status.innerText = "Message sent successfully!";
        e.target.reset();

    } catch (error) {
        status.innerText = "Failed to send message.";
    }
});
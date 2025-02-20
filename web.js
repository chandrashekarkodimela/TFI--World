document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            const pageName = this.textContent.trim(); 

            if (pageName !== "Home") { 
                event.preventDefault(); 
                showErrorPage();
            }
        });
    });

    function showErrorPage() {
        document.body.innerHTML = `
            <div class="error-container">
                <h1>🚪 Oops! You are at the wrong door.</h1>
                <p>Seems like you've taken a wrong turn! Let's go back.</p>
                <button onclick="location.reload()">Go Back 🔙</button>
            </div>
        `;
        applyErrorStyles();
    }

    function applyErrorStyles() {
        const style = document.createElement("style");
        style.innerHTML = `
            .error-container {
                text-align: center;
                padding: 50px;
                font-family: Arial, sans-serif;
                background: linear-gradient(to right, #ff0000, #660000);
                color: white;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .error-container h1 {
                font-size: 3em;
            }
            .error-container button {
                background: black;
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 20px;
                cursor: pointer;
                border-radius: 5px;
                transition: 0.3s;
            }
            .error-container button:hover {
                background: white;
                color: black;
            }
        `;
        document.head.appendChild(style);
    }

    // ✅ Handle Movie Button Clicks (Redirect to Other Pages)
    const buttons = document.querySelectorAll(".movie-actions button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetPage = this.getAttribute("data-url");
            if (targetPage) {
                window.location.href = targetPage; // Redirect to the new page
            }
        });
    });
});

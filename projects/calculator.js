const buttons = document.querySelectorAll(".btn");
        const text = document.querySelector("#text");
        const btnclear = document.querySelector("#btnclear");
        const btnenter = document.querySelector("#btnenter");

        // Append button text to input
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                text.value += button.textContent;
            });
        });

        // Clear input
        btnclear.addEventListener('click', () => {
            text.value = "";
        });

        // Evaluate expression
        btnenter.addEventListener('click', () => {
            try {
                text.value = eval(text.value);
            } catch {
                text.value = "Error";
            }
        });
const emptyInput = document.querySelectorAll("input");
const getButton = document.querySelector(".btn-claim");

getButton.addEventListener("click", function() {
    emptyInput.forEach(function(input) {
        const wrapper = input.parentElement;
        const icon = input.nextElementSibling;
        const errorMessage = wrapper.nextElementSibling;
        
        if(input.value === "") {
            input.classList.add("error");
            icon.classList.remove("hidden");
            errorMessage.classList.remove("hidden");
        } else if (input.id === "email" && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
            input.classList.add("error");
            icon.classList.remove("hidden");
            errorMessage.classList.remove("hidden");
        }
    })
})
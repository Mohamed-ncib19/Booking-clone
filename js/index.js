

        function validateInput(input, regex) {
            const isValid = input.value.match(regex);
            if(input.value==="") {
                input.classList.remove("bg-red-100");
                input.classList.remove("bg-green-100");
                input.classList.remove("border-red-100");
                input.classList.remove("border-green-100");
                input.classList.add("bg-transparent");
            }
            if ((!isValid)) {
                input.classList.remove("bg-transparent");
                input.classList.remove("bg-green-100");
                input.classList.remove("border-green-500");
                input.classList.add("bg-red-100");
                input.classList.add("border-red-500");
            } else {
                input.classList.remove("bg-transparent");
                input.classList.remove("bg-red-100");
                input.classList.add("border-red-500");
                input.classList.add("bg-green-100");
                input.classList.add("border-green-500");
            }
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const nameRegex = /^[a-zA-Z]+$/;
        const addressRegex = /^[a-zA-Z0-9\s,.'-]+$/;
        const zipCodeRegex = /^\d*$/;
        const phoneNumberRegex = /^\d*$/;
        const CardNumberRegex = /^\d{16}$/;
        const expiryDateRegex = /^\d{2}\/\d{2}$/;
        const cvcRejex = /^\d{3}$/;

        const email = document.getElementById("email");
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const address = document.getElementById("address");
        const city = document.getElementById("city");
        const zipCode = document.getElementById("post-code");
        const phoneNumber = document.getElementById("phone-number");
        const cardHolderName = document.getElementById("cardholder-name");
        const CardNumber = document.getElementById("card-number");
        const ExpiryDate = document.getElementById("expiry-date");
        const cvc = document.getElementById("cvc");

        email.addEventListener("input", () => {
            validateInput(email, emailRegex);
            console.log("hellow rocsFJQSBCKJNCNL ")
        });

        firstName.addEventListener("input", () => {
            validateInput(firstName, nameRegex);
        });

        lastName.addEventListener("input", () => {
            validateInput(lastName, nameRegex);
        });

        address.addEventListener("input", () => {
            validateInput(address, addressRegex);
        });

        city.addEventListener("input", () => {
            validateInput(city, nameRegex);
        });

        zipCode.addEventListener("input", () => {
            validateInput(zipCode, zipCodeRegex);
        });

      

        phoneNumber.addEventListener("input", () => {
            validateInput(phoneNumber, phoneNumberRegex);
            console.log("object")
        });

        cardHolderName.addEventListener("input", () => {
            validateInput(cardHolderName, nameRegex);
            console.log("object")
        });

        CardNumber.addEventListener("input", () => {
            validateInput(CardNumber, CardNumberRegex);
            console.log("object")
        });

        ExpiryDate.addEventListener("input", () => {
            validateInput(ExpiryDate, expiryDateRegex);
            console.log("object")
        });

        cvc.addEventListener("input", () => {
            validateInput(cvc, cvcRejex);
            console.log("object")
        });

        // Form submission
        document.getElementById("myForm").addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form submission for demonstration purposes
            alert("Form is valid! Submitting...");
            // Uncomment the next line to submit the form
            // document.getElementById("myForm").submit();
        });


document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const themeSelector = document.getElementById("theme");
    
    // Load stored user information on page load
    loadUserInfo();

    // Event listener for form submission
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        storeUserInfo();
        loadUserInfo();
    });

    // Event listener for theme selection
    themeSelector.addEventListener("change", (e) => {
        setTheme(e.target.value);
    });

    // Function to store user information
    function storeUserInfo() {
        const userInfo = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            country: document.getElementById("country").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            state: document.getElementById("state").value,
            city: document.getElementById("city").value,
            village: document.getElementById("village").value,
        };

        localStorage.setItem("userInformation", JSON.stringify(userInfo));
    }

    // Function to load and display user information
    function loadUserInfo() {
        const storedUserInfo = localStorage.getItem("userInformation");
        if (storedUserInfo) {
            const userInfo = JSON.parse(storedUserInfo);

            document.getElementById("displayFirstName").textContent = userInfo.firstName;
            document.getElementById("displayLastName").textContent = userInfo.lastName;
            document.getElementById("displayCountry").textContent = userInfo.country;
            document.getElementById("displayPhoneNumber").textContent = userInfo.phoneNumber;
            document.getElementById("displayState").textContent = userInfo.state;
            document.getElementById("displayCity").textContent = userInfo.city;
            document.getElementById("displayVillage").textContent = userInfo.village;
        }
    }

    // Function to apply selected theme
    function setTheme(theme) {
        document.body.className = theme === "dark" ? "dark-mode" : "";
    }

    // Load saved theme preference
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        themeSelector.value = savedTheme;
        setTheme(savedTheme);
    }
});

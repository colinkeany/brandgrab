document.addEventListener('DOMContentLoaded', function() {
    let currentId = 1; // For keeping track of the radio button IDs

    function appendRadioButton() {
        currentId++; // Increment the ID count

        const value = document.getElementById("newOptionInput").value;

        if (!value.trim()) {
            alert("Please enter a valid option name");
            return;
        }

        const li = document.createElement("li");
        const radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "options");
        radio.setAttribute("id", `option${currentId}`);

        const label = document.createElement("label");
        label.setAttribute("for", `option${currentId}`);
        label.textContent = value;

        li.appendChild(radio);
        li.appendChild(label);

        document.getElementById("colorOptions").appendChild(li);
    }

    function changeLabel() {
        const selectedRadioButton = document.querySelector('input[name="options"]:checked');
        const labelChangerValue = document.getElementById("labelChanger").value;

        if (selectedRadioButton) {
            const labelForSelected = document.querySelector(`label[for="${selectedRadioButton.id}"]`);
            labelForSelected.textContent = labelChangerValue;
        }
    }
});
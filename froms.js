document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("infoForm");
    const tableBody = document.getElementById("infoBody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        addRecord();
        form.reset();
    });

    function addRecord() {
        const firstName = form.elements["firstName"].value;
        const lastName = form.elements["lastName"].value;
        const address = form.elements["address"].value;
        const pincode = form.elements["pincode"].value;
        const gender = form.elements["gender"].value;
        const foods = [];
        const foodCheckboxes = form.querySelectorAll('input[name="food"]:checked');
        foodCheckboxes.forEach(function (checkbox) {
            foods.push(checkbox.value);
        });
        const state = form.elements["state"].value;
        const country = form.elements["country"].value;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foods.join(", ")}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;
        tableBody.appendChild(newRow);
    }
});

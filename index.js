function getRoomRate(checkInDate, roomType) {
    // Implement logic to calculate room rate based on check-in date and room type
    // For now, return a placeholder value
    return 150.00;
}

function calculateCost() {
    const checkInDate = document.getElementById("checkInDate").value;
    const roomType = document.querySelector('input[name="roomType"]:checked');
    const numAdults = parseInt(document.getElementById("numAdults").value);
    const numChildren = parseInt(document.getElementById("numChildren").value);
    const discount = document.querySelector('input[name="discount"]:checked');

    if (!roomType || !discount) {
        document.getElementById("messageDiv").innerText = "Please select room type and discount option.";
        document.getElementById("costDetails").innerText = "";
        return;
    }

    const roomRate = getRoomRate(checkInDate, roomType.value);
    const totalGuests = numAdults + numChildren;

    if ((roomType.value === "queen" && totalGuests > 5) ||
        (roomType.value === "king" && totalGuests > 2) ||
        (roomType.value === "suite" && totalGuests > 6)) {
        document.getElementById("messageDiv").innerText = "The room you selected will not hold your party.";
        document.getElementById("costDetails").innerText = "";
        return;
    }

    let discountPercentage = 0;
    if (discount.value === "aaa") {
        discountPercentage = 10;
    } else if (discount.value === "military") {
        discountPercentage = 20;
    }

    const discountedRoomRate = roomRate - (roomRate * (discountPercentage / 100));
    const tax = (discountedRoomRate * 0.12).toFixed(2);
    const totalCost = (discountedRoomRate + parseFloat(tax)).toFixed(2);

    document.getElementById("messageDiv").innerText = "";
    document.getElementById("costDetails").innerText =
        `Original Room Cost: $${roomRate.toFixed(2)}\n` +
        `Discount: ${discountPercentage}%\n` +
        `Discounted Room Cost: $${discountedRoomRate.toFixed(2)}\n` +
        `Tax (12%): $${tax}\n` +
        `Total Cost of Stay: $${totalCost}`;
}

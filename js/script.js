document.getElementById('8gb-memory-card-charge').addEventListener("click", function () {

    const extraMemoryCost = document.getElementById('memory-cost');
    extraMemoryCost.innerText = 0;
    totalCalculation();

})

document.getElementById('16gb-memory-card-charge').addEventListener("click", function () {

    const extraMemoryCost = document.getElementById('memory-cost');
    extraMemoryCost.innerText = 180;
    totalCalculation();

})




//  addevent listner for SSD storage
document.getElementById('256gb-ssd-storage').addEventListener('click', function () {
    const ssd256GbCost = document.getElementById('storage-cost');
    ssd256GbCost.innerText = 0;
    totalCalculation();
})

document.getElementById('512gb-ssd-storage').addEventListener('click', function () {
    const ssd512GbCost = document.getElementById('storage-cost');
    ssd512GbCost.innerText = 100;
    totalCalculation();
})

document.getElementById('1tb-ssd-storage').addEventListener('click', function () {
    const ssd1TbCost = document.getElementById('storage-cost');
    ssd1TbCost.innerText = 180;
    totalCalculation();
})

// delivery option and charge:
document.getElementById('general-delivery').addEventListener('click', function () {
    const generalDelivery = document.getElementById('delivery-cost');
    generalDelivery.innerText = 0;
    totalCalculation();
})

document.getElementById('quick-delivery').addEventListener('click', function () {
    const generalDelivery = document.getElementById('delivery-cost');
    generalDelivery.innerText = 20;
    totalCalculation();
})

//calculation for all cost
function totalCalculation() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);

    const deliveryCharge = parseFloat(document.getElementById('delivery-cost').innerText);

    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCharge;
    document.getElementById('total-price').innerText = totalPrice;

    document.getElementById('final-amount').innerText = totalPrice;

}
document.getElementById('cupon-input-btn').addEventListener('click', function () {
    const cuponInput = document.getElementById('cupon-input');
    const cuponInputField = cuponInput.value;

    // Applying condition for coupon code validation
    if (cuponInputField == '') {
        alert('Please enter your Cupon code.Empty input will not be acceptable')
    }
    else if (cuponInputField == 'stevekaku') {
        const previousFinalAmount = parseFloat(document.getElementById('final-amount').innerText);
        const totalAfterDiscount = previousFinalAmount - (previousFinalAmount / 100) * 20;
        document.getElementById('final-amount').innerText = totalAfterDiscount;
        document.getElementById('cupon-input-btn').style.display = 'none'

    }
    else {
        document.getElementById('cupon-error-message').style.display = 'block'
        //timeout function for error message;
        setTimeout(function () {
            document.getElementById('cupon-error-message').remove();
        }, 3000)
    }



})



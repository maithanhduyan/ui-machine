const scanner = document.getElementById('scanner');
const resultsContainer = document.getElementById('results');
const billingList = document.getElementById('billing-list');
const totalAmount = document.getElementById('total-amount');

Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: scanner,
    },
    decoder: {
        readers: ['ean_reader'],
    },
}, function (err) {
    if (err) {
        console.error("Error initializing Quagga:", err);
        return;
    }
    console.log("Quagga initialized successfully.");
    Quagga.start();
    
    Quagga.onDetected(function (result) {
        const code = result.codeResult.code;
        if (!billingList.querySelector(`[data-code="${code}"]`)) {
            const newItem = document.createElement('li');
            newItem.textContent = `Product ${code}`;
            newItem.dataset.code = code;
            billingList.appendChild(newItem);
        }
    });
});

// You would need to handle the pricing and calculation logic here based on the scanned products.
// For simplicity, let's assume a fixed price of $10 for each product.
function calculateTotal() {
    const products = billingList.querySelectorAll('li');
    let total = 0;
    products.forEach(product => {
        total += 10; // Assuming fixed price of $10 per product
    });
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

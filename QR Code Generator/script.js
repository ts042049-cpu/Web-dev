let qrImage = document.getElementById("qrImage");
let qrBox = document.getElementById("qrBox");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(qrText.value);
        qrBox.style.display = "block";
    } else {
        alert("Please enter text or URL");
    }
}

function downloadQR() {
    if (qrImage.src !== "") {
        let link = document.createElement("a");
        link.href = qrImage.src;
        link.download = "qr-code.png";
        link.click();
    } else {
        alert("Generate QR first!");
    }
}
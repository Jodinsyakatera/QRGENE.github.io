function downloadQR() {
  if (!qr) {
    alert("Generate dulu bro!");
    return;
  }
  qr.download({ name: "qr_code", extension: "png" });
}
function generateBase64(jsonData) {
  // JSON should be converted into a string before encoding.
  const str = JSON.stringify(jsonData);
  const base64Text = Buffer.from(str).toString("base64");
  return base64Text;
}

export default generateBase64;

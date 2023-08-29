function getJsonfromBase64(base64Text) {
  const jsonText = Buffer.from(base64Text, "base64").toString("utf-8");
  const jsonData = JSON.parse(jsonText);
  return jsonData;
}

export default getJsonfromBase64;

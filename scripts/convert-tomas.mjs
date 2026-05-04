import sharp from "sharp";
await sharp("/Users/elnaftos/Desktop/tomas.jpg")
  .resize(400, 400, { fit: "cover", position: "centre" })
  .webp({ quality: 85 })
  .toFile("public/tomas.webp");
console.log("OK");

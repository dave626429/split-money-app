import sharp from "sharp";

export function reduceImageSize(inputFile, outputPath) {
  console.log(inputFile, outputPath);
  return sharp(inputFile)
    .resize(150, 150)
    .jpeg({ quality: 100, mozjpeg: true })
    .toFile(outputPath);
}

const links = require ('./prueba');

const fs = require('fs');
const path = require('path');

// URL en formato base64 de la imagen que deseas descargar
const imagesData = links;

const downloadDir = path.join(__dirname, 'images');

// Función para descargar una imagen desde una URL base64
const downloadBase64Image = (imageUrl, page) => {
  const base64Data = imageUrl.split(';base64,').pop();
  const imageType = imageUrl.split(';')[0].split('/')[1];
  const imageFileName = `imagen_${page}.${imageType}`;
  const imagePath = path.join(downloadDir, imageFileName);

  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
  }

  fs.writeFileSync(imagePath, base64Data, 'base64');
  console.log(`Imagen de la página ${page} descargada y guardada con éxito en:`, imagePath);
};

// Función para descargar todas las imágenes del array de objetos
const downloadAllImages = () => {
  imagesData.forEach((data) => downloadBase64Image(data.url, data.page));
};

downloadAllImages();

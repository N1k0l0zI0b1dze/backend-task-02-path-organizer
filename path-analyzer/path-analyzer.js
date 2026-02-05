const path = require("path");

const uploadedFile = "D:\\WebServer\\..\\uploads\\images\\./profile-pic.png";

const normalize = path.normalize(uploadedFile);

const basename = path.basename(normalize);

const extname = path.extname(normalize);

if (extname === ".png" || extname === ".jpg") {
  console.log("Image file detected");
} else {
  console.log("Unknown file type");
}

const newPath = path.join(__dirname, "static", basename);

console.log("New file path:", newPath);
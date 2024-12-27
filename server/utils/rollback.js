import fs from "fs";
import path from "path";

export const rollbackPictures = (picPath) => {
  if (picPath && picPath.length > 0) {
    picPath.forEach((fileLocation) => {
      const filePath = path.join(process.cwd(), "/uploads/", fileLocation);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error removing file: ${err}`);
          return;
        }
      });
    });
  }
};

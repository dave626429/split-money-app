import { unlink } from "node:fs/promises";

export function removeFileFromUploadsDir(filePath) {
  return unlink(filePath);
}

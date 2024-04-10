import { rmSync } from "fs";
import { mkdirSync, statSync } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

function checkDirIfExist(path) {
  console.log("checking paths");
  try {
    const stats = statSync(path);
    return stats.isDirectory();
  } catch (error) {
    // was throwing -4058, so its understood that the path not available
    console.error("error:the path not available,continue...");
    return false;
  }
}

export function createDirPath(path) {
  if (checkDirIfExist(path)) return;
  console.log("creating required paths");
  return mkdirSync(path, { recursive: true });
}

export function removeDirPath(path) {
  if (!checkDirIfExist(path)) return;
  console.log("removing path");
  return rmSync(path, { recursive: true, force: true });
}

// pass import.meta as param when accessing
export function getCurrentDirPath(meta) {
  const __filename = fileURLToPath(meta.url);
  const __dirname = path.dirname(__filename);
  return { __filename, __dirname };
}

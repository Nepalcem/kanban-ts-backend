import * as crypto from "crypto";

function hashTitle(title: string): string {
  const hash = crypto.createHash("md5"); 
  hash.update(title);
  return hash.digest("hex").substring(0, 16);
}

export default hashTitle;
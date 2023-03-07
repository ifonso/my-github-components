import axios from "axios";

export const generateRandomString = (length: number): string => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export async function getBase64FromUrl(url: string) {
  const data = await axios({
    method: "get",
    url: url,
    responseType: "arraybuffer",
  });

  if (!data.data) return "";

  return `data:image/png;base64, ${Buffer.from(data.data).toString("base64")}`;
}

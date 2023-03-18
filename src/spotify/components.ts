import { MusicData } from "./types";
import { getBase64FromUrl } from "../utils";
import { style } from "./style";

async function getMusicItem(data: MusicData): Promise<string> {
  const image = await getBase64FromUrl(data.image);

  return `
  <div class="music">
    <img src="${image}" class="cover"/>
    <div class="text">
      <div class="title">${data.title}</div>
      <div class="singer">${data.singer}</div>
    </div>
  </div>
  `;
}

export async function getMusicsCard(data: Array<MusicData>): Promise<string> {
  const musicComponents = await Promise.all(
    data.map(async (music) => {
      return await getMusicItem(music);
    })
  );

  return `
  <svg
  width="381"
  height="204"
  viewBox="0 0 381 204"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <!-- Background -->
    <foreignObject width="380" height="204">
      ${style}
      <div xmlns="http://www.w3.org/1999/xhtml" class="container">
        ${musicComponents.join("\n")}
      </div>
    </foreignObject>
  </svg>
  `;
}

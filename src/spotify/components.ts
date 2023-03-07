import { MusicData } from "./types";
import { getBase64FromUrl } from "../utils";

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

    <style>
      @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono");
      
      div {
        font-family: "JetBrains Mono", Verdana;
      }

      .container {
        width: 345px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        padding: 16px;
        background: #F8F8F8;
        border: 1px solid #737373;
        border-radius: 16px;
      }

      .music {
        width: 100%;
        height: 46px;
        display: flex;
        justify-content: flex-start;
        gap: 10px;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 4px;
        text-align: start;
        align-items: flex-start;
        justify-content: center;
      }

      .cover {
        height: 44px;
        width: 44px;

        border: 1px solid #000;
        border-radius: 8px;
      }

      .title {
        font-size: 12px;
        color: #000;
      }

      .singer {
        font-size: 12px;
        color: #8E8E8E;
      }
    </style>

      <div xmlns="http://www.w3.org/1999/xhtml" class="container">
        ${musicComponents.join("\n")}
      </div>
    </foreignObject>
  </svg>
  `;
}

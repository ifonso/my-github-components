import { server_icon, apple_icon } from "./assets";

function getLanguageItem(language: string) {
  let color: string;

  switch (language) {
    case "TypeScript":
      color = "#5290DA";
      break;
    case "JavaScript":
      color = "#DABC52";
      break;
    case "Swift":
      color = "#DA6A52";
      break;
    default:
      color = "#D17ED2";
  }

  return `
  <div class="language">
    <div class="dot" style="background-color: ${color};"></div>
    <div class="language-name">${language}</div>
  </div>
  `;
}

export function getLanguageCard(data: string[]) {
  const languageComponents = data.map((item) => {
    return getLanguageItem(item);
  });

  return `
  <svg
  width="381"
  height="204"
  viewBox="0 0 381 204"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
    <foreignObject width="380" height="204">

    <style>
      @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono");
      
      div {
        font-family: "JetBrains Mono", Verdana;
      }

      .container {
        width: 330px;
        height: 154px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        padding: 24px;
        background: #F8F8F8;
        border: 1px solid #737373;
        border-radius: 16px;
      }

      .cover {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 18px;
      }

      .logo {
        width: 40px;
      }

      .text {
        font-weight: 600;
        font-size: 12px;
        text-align: center;
      }

      .languages {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      .language {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .dot {
        height: 8px;
        width: 8px;
        border-radius: 50%;
      }

      .language-name {
        font-size: 10px;
      }

      .tag {
        font-size: 10px;
        color: #686868;
        position: absolute;
        right: 24px;
        bottom: 24px;
      }

    </style>

      <div xmlns="http://www.w3.org/1999/xhtml" class="container">
      
      <div class="cover">
        <img class="logo" src="${
          data[0] == "Swift" ? apple_icon : server_icon
        }"/>
        <div class="text">
          ${
            data[0] == "Swift"
              ? "I Love Stev Jobs! ❤️"
              : "Give me that backend! 👨🏻‍💻"
          }
        </div>
      </div>

      <div class="languages">
        ${languageComponents.join("\n")}
      </div>

      <div class="tag">@unchainedDavid</div>
    
      </div>
    </foreignObject>
  </svg>
  `;
}

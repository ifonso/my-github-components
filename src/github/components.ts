import { server_icon, apple_icon } from "./assets";
import { style } from "./style";

function getLanguageItem(language: string, index: number) {
  let color: string;

  switch (index) {
    case 0:
      color = "#FFD76E";
      break;
    case 1:
      color = "#D6D6D6";
      break;
    case 2:
      color = "#C6925C";
      break;
    default:
      color = "#000000";
  }

  return `
  <div class="language">
    <div class="dot" style="background-color: ${color};"></div>
    <div class="language-name">${language}</div>
  </div>
  `;
}

export function getLanguageCard(data: string[]) {
  const languageComponents = data.map((item, index) => {
    return getLanguageItem(item, index);
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
      ${style}
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

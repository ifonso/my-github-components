import { JetBrainsMedium, JetBrainsNormal } from "../fonts";

export const style = `
<style>
  @font-face { 
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 400;
    src: url(data:application/font-woff2;charset=utf-8;base64,${JetBrainsNormal}) format('woff2');
  }

  @font-face { 
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 500;
    src: url(data:application/font-woff2;charset=utf-8;base64,${JetBrainsMedium}) format('woff2');
  }

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
    font-weight: 500;
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
`
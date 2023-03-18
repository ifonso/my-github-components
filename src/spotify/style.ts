import { JetBrainsNormal } from "../fonts";

export const style = `
<style>
  @font-face { 
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 400;
    src: url(data:application/font-woff2;charset=utf-8;base64,${JetBrainsNormal}) format('woff2');
  }

  div {
    font-family: "JetBrains Mono";
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
`
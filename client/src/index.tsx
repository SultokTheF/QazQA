import ReactDom from "react-dom/client";

const rootNode = document.getElementById("root") as HTMLElement;
const root = ReactDom.createRoot(rootNode);

root.render(
  <>
    <h1>Hello world!</h1>
  </>
)
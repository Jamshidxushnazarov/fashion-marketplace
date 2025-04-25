import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root";
import ProviderConfig from "./tools/provider";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <ProviderConfig>
        <Root />
    </ProviderConfig>
);

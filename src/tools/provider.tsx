import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

// Define the type for the props
interface ProviderConfigProps {
    children: ReactNode;
}

const ProviderConfig: React.FC<ProviderConfigProps> = ({ children }) => {
    return (
        <BrowserRouter>
            <ConfigProvider>{children}</ConfigProvider>
        </BrowserRouter>
    );
};

export default ProviderConfig;

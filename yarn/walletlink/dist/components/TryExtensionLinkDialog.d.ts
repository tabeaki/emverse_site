import { FunctionComponent } from "preact";
export declare const TryExtensionLinkDialog: FunctionComponent<{
    darkMode: boolean;
    version: string;
    sessionId: string;
    sessionSecret: string;
    walletLinkUrl: string;
    isOpen: boolean;
    isConnected: boolean;
    isParentConnection: boolean;
    connectDisabled: boolean;
    onCancel: (() => void) | null;
}>;

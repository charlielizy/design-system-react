/// <reference types="react" />
export interface INavBarLink {
    key: string;
    name: string;
    icon: JSX.Element | undefined;
    link: string;
    isExternal?: boolean;
    onClick?: (event: any) => void;
}
export interface INavBarTitle {
    name: string;
    title?: string;
    package?: string;
    icon: JSX.Element | undefined;
}
export interface INavBar {
    productInfo: INavBarTitle;
    primaryLinks: INavBarLink[];
    footerLinks: INavBarLink[];
    LinkComponent?: React.ElementType;
    isManuallyOpen?: boolean;
    displayTitle?: boolean;
}

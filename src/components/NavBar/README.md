# NavBar

## About

- Navigation bar that is designed to sit on the left side of the window.

- Icons are SVG images passed into the component

@interface INavBar

@scss \_textinput.scss

## ITextInput Props

| Props          | Type         | Description                                                  |
| -------------- | ------------ | ------------------------------------------------------------ |
| productInfo    | INavBarTitle | describes the name and icon                                  |
| primaryLinks   | INavBarLink  | describes the name, icon, link and if it's external          |
| footerLinks    | INavBarLink  | describes the name, icon, link and if it's external          |
| LinkComponent  | Element      | The component that will be rendered for each internal link   |
| isManuallyOpen | boolean      | Manual override on whether the nav bar should be open or not |

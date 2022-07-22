import "styled-components/native";
import theme from "./colors";

declare module "styled-components" {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {}
}

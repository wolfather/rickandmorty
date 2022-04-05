import { dark } from "./dark";
import { light } from "./light";

const themeTokens = {
    font: {
        size: {
            small: '14px',
            medium: '16px',
            large: '20px',
            extraLarge: '24px'
        }
    }
};

export const theme = { 
    light: {...light, font: themeTokens.font},
    dark: {...dark, font: themeTokens.font}
}

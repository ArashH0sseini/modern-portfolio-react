import { createTheme } from '@mui/material/styles';

// Create Custom Theme
export const lightTheme = createTheme({
    direction: "rtl",
    palette:{
        mode:"light",
        primary:{
            main:"#8be9fd"
        },
        secondary:{
            main:"#bd93f9"
        }
    },
    typography: {
        fontFamily: "vazir, roboto"
    }
});

export const darkTheme = createTheme({
    direction: "rtl",
    palette:{
        mode:"dark",
        primary:{
            main:"#8be9fd"
        },
        secondary:{
            main:"#bd93f9"
        }
    },
    typography: {
        fontFamily: "vazir, roboto"
    }
});
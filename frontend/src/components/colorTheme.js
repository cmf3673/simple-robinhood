import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        background: {
            default: '#263238',
        },
        text: {
            primary: "#ffffff"
          },
        primary: {
            main: "#e0e0e0",
        },
        secondary: {
            main: "#ef9a9a",
        },
    }
});

export default theme;
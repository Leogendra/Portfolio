import { createTheme } from '@mui/material/styles';

const DarkPalette = createTheme({
    palette: {
        common: {
            black: '#000000',
            white: '#ffffff'
        },
        primary: {
            main: '#017200'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.6)'

        },
        background: {
            default: '#2b2d31',
            paper: '#313338'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

export default DarkPalette;
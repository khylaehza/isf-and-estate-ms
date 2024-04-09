import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { DataProvider } from "./DataContext";
function App() {
    const theme = createTheme({
        typography: {
            fontFamily: ["Space Grotesk", "sans-serif"].join(","),
            color: "#1C3055",
        },
        components: {
            MuiFormLabel: {
                styleOverrides: {
                    asterisk: { color: "#F9806D", fontWeight: "normal" },
                },
            },
            MuiSelect: {
                styleOverrides: {
                    root: {
                        borderRadius: "6px",
                        "& fieldset.MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(28, 48, 85, 0.3)",
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <DataProvider>
                <RouterProvider router={router} />
            </DataProvider>
        </ThemeProvider>
    );
}

export default App;

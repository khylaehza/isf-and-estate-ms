import {
    Box,
    Input,
    FormControl,
    InputLabel,
    FormHelperText,
    InputAdornment,
} from "@mui/material";
export const CusLogInput = ({
    name,
    placeholder,
    label,
    required,
    error,
    adornment,
    value,
    onChange,
    type = "text",
}) => {
    return (
        <Box
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            w="100%"
            gap={0.5}
        >
            <InputLabel
                required={required}
                htmlFor={`${name}`}
                sx={{ fontSize: 11, fontWeight: "bold", color: "#1C3055" }}
            >
                {label}
            </InputLabel>
            <FormControl
                required={required}
                error={error}
                variant="standard"
                fullWidth
            >
                <Input
                    name={name}
                    placeholder={`${placeholder}`}
                    aria-describedby={`${name}-error`}
                    variant="filled"
                    disableUnderline
                    fullWidth
                    width="100%"
                    id={`${name}`}
                    sx={{
                        bgcolor: "#FFF",
                        borderRadius: 2,
                        paddingY: 1,
                        paddingX: 2,
                        boxShadow: "0 0 8px rgba(28, 48, 85, 0.3)",
                        textAlign: "left",
                        fontSize: 12,
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            {adornment}
                        </InputAdornment>
                    }
                    type={type}
                    onChange={onChange}
                    value={value}
                />

                <FormHelperText id={`${name}-error`}>{error}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export const CusFormInput = ({
    name,
    placeholder,
    label,
    required,
    error,
    type = "text",
    value,
    onChange,
}) => {
    return (
        <Box
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            w="100%"
            gap={0.5}
        >
            <InputLabel
                required={required}
                htmlFor={`${name}`}
                sx={{
                    fontSize: 11,
                    fontWeight: "bold",
                    color: "#1C3055",
                }}
            >
                {label}
            </InputLabel>
            <FormControl
                required={required}
                error={error}
                variant="standard"
                fullWidth
            >
                <Input
                    name={name}
                    placeholder={`${placeholder}`}
                    aria-describedby={`${name}-error`}
                    variant="filled"
                    disableUnderline
                    fullWidth
                    width="100%"
                    type={type}
                    id={`${name}`}
                    sx={{
                        bgcolor: "#FFF",
                        borderRadius: 2,
                        paddingY: 1,
                        paddingX: 2,
                        ":hover": { borderColor: "#000" },
                        textAlign: "left",
                        fontSize: 12,
                        border: 1,
                        borderColor: "rgba(28, 48, 85, 0.3)",
                    }}
                    onChange={onChange}
                    value={value}
                />

                <FormHelperText id={`${name}-error`}>{error}</FormHelperText>
            </FormControl>
        </Box>
    );
};

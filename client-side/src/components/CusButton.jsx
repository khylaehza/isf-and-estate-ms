import { Button, IconButton } from "@mui/material";

export const CusPrimBtn = ({
    label,
    action,
    type,
    color = "#4C6085",
    hover = "#3C4D6C",
}) => {
    return (
        <>
            <Button
                variant={"contained"}
                sx={{
                    backgroundColor: color,
                    "&:hover": {
                        backgroundColor: hover,
                    },
                    fontWeight: "bold",
                }}
                onClick={action}
                type={type}
                // fullWidth
            >
                {label}
            </Button>
        </>
    );
};

export const CusSecBtn = ({ label, action, type, color = "#4C6085" }) => {
    return (
        <>
            <Button
                variant={"outlined"}
                sx={{
                    borderColor: color,
                    "&:hover": {
                        backgroundColor: "#EFF1F4",
                        borderColor: "#4C6085",
                    },
                    fontWeight: "bold",
                    color: color,
                }}
                onClick={action}
                type={type}
            >
                {label}
            </Button>
        </>
    );
};

export const CusIconBtn = ({
    icon,
    w = 40,
    h = 40,
    color = "#E0EBF2",
    action,
    label,
    ...props
}) => {
    return (
        <IconButton
            color="inherit"
            size="small"
            aria-label={label}
            edge="start"
            sx={{
                width: w,
                height: h,
                borderRadius: 1,
                borderWidth: 2,
                bgcolor: color,

                // boxShadow: "0px 0px 5px rgba(28, 48, 85, 0.4)",
            }}
            onClick={action}
            {...props}
        >
            {icon}
        </IconButton>
    );
};

export const CusThirdBtn = ({ label, action, type }) => {
    return (
        <>
            <Button
                variant={"link"}
                sx={{
                    "&:hover": {
                        backgroundColor: "#E0EBF2",
                        borderColor: "#4C6085",
                        fontWeight: "bold",
                    },
                    fontWeight: "medium",
                    color: "#4C6085",

                    fontSize: 11,
                    width: 130,
                    textTransform: "inherit",
                }}
                onClick={action}
                type={type}
                fullWidth={false}
            >
                {label}
            </Button>
        </>
    );
};

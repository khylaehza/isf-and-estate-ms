import { Button, IconButton } from "@mui/material";

export const CusPrimBtn = ({ label, action, type }) => {
    return (
        <>
            <Button
                variant={"contained"}
                sx={{
                    backgroundColor: "#4C6085",
                    "&:hover": {
                        backgroundColor: "#3C4D6C",
                    },
                    fontWeight: "bold",
                }}
                onClick={action}
                type={type}
            >
                {label}
            </Button>
        </>
    );
};

export const CusSecBtn = ({ label, action, type }) => {
    return (
        <>
            <Button
                variant={"outlined"}
                sx={{
                    borderColor: "#4C6085",
                    "&:hover": {
                        backgroundColor: "#EFF1F4",
                        borderColor: "#4C6085",
                    },
                    fontWeight: "bold",
                    color: "#4C6085",
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

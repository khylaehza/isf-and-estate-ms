import { useState } from "react";
import { CusIconBtn } from "./CusButton";
import { Menu, MenuItem, Fade } from "@mui/material";
import { FilterAltOutlined, SwapVertOutlined } from "@mui/icons-material";

const CusSort = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log("a");
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <CusIconBtn
                icon={
                    <SwapVertOutlined
                        sx={{ height: 20, width: 20, color: "#1C3055" }}
                    />
                }
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                action={handleClick}
            />

            <Menu
                id="fade-menu"
                MenuListProps={{
                    "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose} sx={{ fontSize: 12 }}>
                    Ascending Name
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontSize: 12 }}>
                    Descending Name
                </MenuItem>
            </Menu>
        </>
    );
};

export default CusSort;

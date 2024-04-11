import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { useState } from "react";
import axiosClient from "../axiosClient";
import { useNavigate } from "react-router-dom";
const CusMenu = ({ setToken, setCurUser }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        setAnchorEl(null);
        axiosClient.get("/logout").then(() => {
            setToken(null);
            setCurUser(null);
        });
    };

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
            >
                <Avatar sx={{ width: 26, height: 26, fontSize: 12 }}>H</Avatar>
            </IconButton>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "user-menu",
                }}
                sx={{ fontSize: 12 }}
            >
                <MenuItem onClick={handleClose} sx={{ fontSize: 12 }}>
                    Change Password
                </MenuItem>
                <MenuItem onClick={handleLogOut} sx={{ fontSize: 12 }}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default CusMenu;

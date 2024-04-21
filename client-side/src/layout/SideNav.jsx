import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Stack,
} from "@mui/material";

import {
    ChevronRight,
    ChevronLeft,
    MenuRounded,
    DashboardRounded,
    AddBoxRounded,
    GroupsRounded,
    HomeWorkRounded,
    ExpandLessRounded,
    ExpandMoreRounded,
    DashboardOutlined,
    AddBoxOutlined,
    GroupsOutlined,
    HomeWorkOutlined,
} from "@mui/icons-material";
import CusMenu from "../components/CusMenu";
import { useNavigate, useLocation } from "react-router-dom";
import { useData } from "../DataContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    padding: 6,
    border: "none",
    boxShadow: "0px 0px 8px rgba(76, 96, 133, 0.5)",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    boxShadow: "0px 0px 8px rgba(76, 96, 133, 0.5)",
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const DrawerStyle = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
        padding: 6,
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up("sm")]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const AppBarStyle = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    border: "none",
    color: "#1C3055",
    backgroundColor: "#FFF",

    boxShadow: "0 3px 4px -4px #4C6085",
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const SideNav = ({ curUser, setCurUser, setToken, children }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const { districts, estates } = useData();
    const [curLocISF, setCurrentLocISF] = useState();
    const [curLocEstate, setCurrentLocEstate] = useState();
    let districtMenu = [];
    let estateMenu = [];

    districts.map((dst) => {
        districtMenu.push({
            name: `District ${dst.name}`,
            action: () => {
                setCurrentLocISF(`/isf/district${dst.name}`);
                navigate(`/isf/district${dst.name}`);
            },
            location: `/isf/district${dst.name}`,
        });
    });

    estates.map((est) => {
        estateMenu.push({
            name: est.name,
            action: () => {
                navigate(`/estate/${est.name}`);
                setCurrentLocEstate(`/estate/${est.name}`);
            },
            location: `/estate/${est.name}`,
        });
    });

    districtMenu.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    estateMenu.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    const [regMenu, openRegOpen] = useState(false);
    const [isfMenu, openIsfOpen] = useState(false);
    const [estMenu, openEstOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        openRegOpen(false);
        openIsfOpen(false);
        openEstOpen(false);
    };

    const menuData = [
        {
            name: "Dashboard",
            icon:
                location.pathname == "/" ? (
                    <DashboardRounded sx={{ color: "#4C6085" }} />
                ) : (
                    <DashboardOutlined sx={{ color: "#4C6085" }} />
                ),
            action: () => {
                navigate("/");
            },
            location: "/",
        },
        {
            name: "Registration",
            icon:
                location.pathname == "/user" ||
                location.pathname == "/district" ||
                location.pathname == "/estate" ? (
                    <AddBoxRounded sx={{ color: "#4C6085" }} />
                ) : (
                    <AddBoxOutlined sx={{ color: "#4C6085" }} />
                ),
            menus: [
                {
                    name: "User",
                    action: () => {
                        navigate("/user");
                    },
                    location: "/user",
                },
                {
                    name: "District",
                    action: () => {
                        navigate("/district");
                    },
                    location: "/district",
                },
                {
                    name: "Estate",
                    action: () => {
                        navigate("/estate");
                    },
                    location: "/estate",
                },
            ],
            action: () => {
                setOpen(true);
                openRegOpen(!regMenu);
            },
            open: regMenu,
        },
        {
            name: "ISFs",
            icon:
                location.pathname == curLocISF ? (
                    <GroupsRounded sx={{ color: "#4C6085" }} />
                ) : (
                    <GroupsOutlined sx={{ color: "#4C6085" }} />
                ),
            menus: districtMenu,
            action: () => {
                setOpen(true);
                openIsfOpen(!isfMenu);
            },
            open: isfMenu,
        },
        {
            name: "Estate Awardees",
            icon:
                location.pathname == curLocEstate ? (
                    <HomeWorkRounded sx={{ color: "#4C6085" }} />
                ) : (
                    <HomeWorkOutlined sx={{ color: "#4C6085" }} />
                ),

            menus: estateMenu,

            action: () => {
                setOpen(true);
                openEstOpen(!estMenu);
                console.log("home");
            },
            open: estMenu,
        },
    ];
    return (
        <Box
            display={"flex"}
            sx={{
                height: "100%",
                p: 3,
                backgroundColor: "#E0EBF2",
                // alignItems: "flex-start",
            }}
        >
            <CssBaseline />
            <AppBarStyle position="fixed" open={open}>
                <Toolbar
                    sx={{
                        justifyContent: open ? "flex-end" : "space-between",
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ":focus": {
                                outline: "none",
                                bgcolor: "#fff",
                            },
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuRounded
                            sx={{
                                color: "#000",
                            }}
                        />
                    </IconButton>

                    <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                        <Stack flexDirection={"column"} alignItems={"flex-end"}>
                            <Typography
                                noWrap
                                component="div"
                                fontSize={12}
                                fontWeight={"bold"}
                            >
                                {curUser.fname}
                            </Typography>
                            <Typography fontSize={10} noWrap component="div">
                                {curUser.role}
                            </Typography>
                        </Stack>

                        <CusMenu setToken={setToken} setCurUser={setCurUser} />
                    </Stack>
                </Toolbar>
            </AppBarStyle>
            <DrawerStyle variant="permanent" open={open}>
                <Box
                    sx={{
                        ...(open && {
                            display: "flex",
                            flexDirection: "row",
                            p: 2,
                            // alignItems: "center",
                        }),
                    }}
                >
                    <Stack
                        display={"flex"}
                        flexDirection={"column"}
                        textAlign={"left"}
                        sx={{
                            ...(!open && { display: "none" }),
                        }}
                    >
                        <Typography
                            fontSize={18}
                            color={"#1C3055"}
                            fontWeight={"bold"}
                        >
                            ISFs AND ESTATE
                        </Typography>
                        <Typography
                            fontSize={18}
                            color={"#1C3055"}
                            fontWeight={"bold"}
                        >
                            MANAGEMENT SYSTEM
                        </Typography>
                    </Stack>
                    <DrawerHeader>
                        <IconButton
                            onClick={handleDrawerClose}
                            sx={{
                                ":focus": {
                                    outline: "none",
                                    bgcolor: "#fff",
                                },
                                ":hover": {
                                    bgcolor: "fff",
                                },
                                marginLeft: -3,
                                marginTop: -4,
                            }}
                        >
                            {theme.direction === "rtl" ? (
                                <ChevronRight />
                            ) : (
                                <ChevronLeft
                                    sx={{
                                        ...(!open && { display: "none" }),
                                    }}
                                />
                            )}
                        </IconButton>
                    </DrawerHeader>
                </Box>

                <List>
                    {menuData.map((data, index) => {
                        let menu = data.menus;
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={{
                                    display: "block",
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                            ? "initial"
                                            : "center",
                                        px: 2.5,
                                    }}
                                    onClick={data.action}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {data.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{
                                            opacity: open ? 1 : 0,
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            style={{
                                                fontSize: 14,
                                                fontWeight: "bold",
                                                color: "#1C3055",
                                            }}
                                        >
                                            {data.name}
                                        </Typography>
                                    </ListItemText>
                                    {data.name != "Dashboard" && (
                                        <>
                                            {data.open ? (
                                                <ExpandLessRounded
                                                    sx={{
                                                        ...(!open && {
                                                            display: "none",
                                                        }),
                                                    }}
                                                />
                                            ) : (
                                                <ExpandMoreRounded
                                                    sx={{
                                                        ...(!open && {
                                                            display: "none",
                                                        }),
                                                    }}
                                                />
                                            )}
                                        </>
                                    )}
                                </ListItemButton>

                                <Collapse
                                    in={data.open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    {data.name != "Dashboard" && (
                                        <>
                                            <List
                                                component="div"
                                                disablePadding
                                                sx={{
                                                    ...(!open && {
                                                        display: "none",
                                                    }),
                                                }}
                                            >
                                                {menu.map((menu, key) => (
                                                    <ListItemButton
                                                        key={key}
                                                        onClick={menu.action}
                                                        sx={{
                                                            backgroundColor:
                                                                location.pathname ==
                                                                menu.location
                                                                    ? "#EFF1F4"
                                                                    : "#FFF",
                                                        }}
                                                    >
                                                        <ListItemIcon />
                                                        <ListItemText>
                                                            <Typography
                                                                variant="body1"
                                                                style={{
                                                                    fontSize: 12,
                                                                    color: "#1C3055",
                                                                    fontWeight:
                                                                        location.pathname ==
                                                                        menu.location
                                                                            ? "bold"
                                                                            : "normal",
                                                                }}
                                                            >
                                                                {menu.name}
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </>
                                    )}
                                </Collapse>
                                <Divider
                                    sx={{
                                        ...(!open && {
                                            display: "none",
                                        }),
                                    }}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </DrawerStyle>
            <Box component="main" width={"100%"} height={"100%"}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
};

export default SideNav;

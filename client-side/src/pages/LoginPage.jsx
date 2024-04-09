import "../App.css";
import { Container, Box, Stack, Divider, Typography } from "@mui/material";
import mnllogo from "../assets/images/manilalogo.png";
import { CusLogInput, CusPrimBtn } from "../components";
import { PersonRounded, LockRounded } from "@mui/icons-material";
import { useData } from "../DataContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../axiosClient";
const LoginPage = () => {
    const { user, token, setUser, setToken } = useData();
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        uname: "",
        password: "",
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setLoginForm({ ...loginForm, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axiosClient
            .post("/login", loginForm)
            .then((data) => {
                if (data.status) {
                    setToken(data.token);

                    // if (token) {
                    //     axiosClient.get("/profile").then((data) => {
                    //         setUser(data);
                    //         // navigate("/");
                    //     });
                    // }
                } else {
                    console.log(data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    if (token != null) {
        return <Navigate to={"/"} />;
    }
    return (
        <Container
            className="login-bg"
            fixed
            sx={{
                height: "100vh",
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems={{
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                }}
                justifyContent={"center"}
                justifyItems={"center"}
                height={"100%"}
            >
                <Box
                    width={{ xs: 300, sm: 350, md: 400, lg: 450, xl: 500 }}
                    my={4}
                    display="flex"
                    p={5}
                    alignItems="center"
                    flexDirection="column"
                    className="login-form"
                    justifyItems={"center"}
                    justifyContent={"center"}
                    justifySelf={"center"}
                >
                    <Stack gap={2}>
                        <Stack
                            flexDirection="row"
                            width="100%"
                            alignItems="center"
                            justifyContent="center"
                            gap={{ xs: 2, sm: 0 }}
                        >
                            <Box width="65%">
                                <Typography
                                    className="title-text"
                                    fontSize="1.2rem"
                                    fontWeight="bold"
                                >
                                    <span>
                                        INFORMAL SETTLERS FAMILY DATABASE
                                    </span>
                                    <span> AND ESTATE MANAGEMENT SYSTEM</span>
                                </Typography>
                            </Box>
                            <Box
                                width="35%"
                                display="flex"
                                justifyContent="flex-end"
                            >
                                <img
                                    src={mnllogo}
                                    alt="Manila Logo"
                                    height={80}
                                    width={80}
                                />
                            </Box>
                        </Stack>
                        <>
                            <Divider width="101%" />
                        </>
                        <Stack gap={3}>
                            <CusLogInput
                                name="uname"
                                label="Username"
                                required={true}
                                placeholder={"juandc"}
                                adornment={
                                    <PersonRounded
                                        sx={{
                                            color: "#4C6085",
                                            fontSize: 16,
                                        }}
                                    />
                                }
                                value={loginForm.username}
                                onChange={handleInput}
                            />
                            <CusLogInput
                                name="password"
                                label="Password"
                                required={true}
                                placeholder={"•••••••"}
                                adornment={
                                    <LockRounded
                                        sx={{
                                            color: "#4C6085",
                                            fontSize: 16,
                                        }}
                                    />
                                }
                                value={loginForm.password}
                                onChange={handleInput}
                                type={"password"}
                            />
                            <CusPrimBtn label="Login" action={handleSubmit} />
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;

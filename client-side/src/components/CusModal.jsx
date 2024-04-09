import {
    Modal,
    Box,
    Typography,
    Divider,
    IconButton,
    Stack,
} from "@mui/material";
import { CusPrimBtn, CusSecBtn } from "./CusButton";
import { CloseRounded } from "@mui/icons-material";
const CusModal = ({ label, action, body, open, setOpen, form }) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "background.paper",
        boxShadow: "0px 0px 2px rgba(76, 96, 133, 0.6)",
        p: 4,
        borderRadius: 3,
    };

    return (
        <>
            <CusPrimBtn label={label} action={handleOpen} />

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="title"
                aria-describedby="description"
            >
                <Stack sx={style} gap={2}>
                    <Box
                        display="flex"
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Typography
                            id="title"
                            fontSize={16}
                            fontWeight={"medium"}
                            gutterBottom
                        >
                            Add new user
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <CloseRounded
                                sx={{ color: "#4C6085", fontSize: 16 }}
                            />
                        </IconButton>
                    </Box>
                    <Divider />
                    {form}
                    <Stack
                        flexDirection={"row"}
                        gap={1}
                        justifyContent={"flex-end"}
                    >
                        <CusSecBtn label="CANCEL" action={handleClose} />
                        <CusPrimBtn
                            label="ADD"
                            action={action}
                            type={"submit"}
                        />
                    </Stack>
                </Stack>
            </Modal>
        </>
    );
};

export default CusModal;

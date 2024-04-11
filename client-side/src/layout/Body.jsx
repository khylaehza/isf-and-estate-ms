import Header from "./Header";
import SideNav from "./SideNav";
import { Stack, Box } from "@mui/material";
import {
    CusSearch,
    CusIconBtn,
    CusPrimBtn,
    CusTable,
    CusSort,
} from "../components";
import { FilterAltOutlined } from "@mui/icons-material";

const Body = ({
    module,
    number,
    rows,
    columns,
    setOpen,
    addFormLayout,
    editForm,
    editFormLayout,
    setOpenEdit,
    setCurRow,
    curRow,
}) => {
    return (
        <Stack gap={3}>
            <Header module={module} number={number} />
            <Box
                bgcolor={"#fff"}
                sx={{
                    borderRadius: 3,
                    boxShadow: "0px 0px 5px rgba(76, 96, 133, 0.3)",
                }}
                p={3}
                display={"flex"}
                flexDirection={"column"}
                gap={3}
            >
                <Stack
                    display={"flex"}
                    justifyContent={"space-between"}
                    flexDirection={"row"}
                    width={"100%"}
                >
                    <CusSearch />

                    <Stack
                        gap={2}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                    >
                        <CusSort />

                        <CusIconBtn
                            icon={
                                <FilterAltOutlined
                                    sx={{
                                        height: 20,
                                        width: 20,
                                        color: "#1C3055",
                                    }}
                                />
                            }
                        />

                        <CusPrimBtn
                            label={"+ Add User"}
                            action={() => setOpen(true)}
                        />

                        {addFormLayout}
                    </Stack>
                </Stack>
                <CusTable
                    rows={rows}
                    columns={columns}
                    editForm={editForm}
                    editFormLayout={editFormLayout}
                    setOpenEdit={setOpenEdit}
                    setCurRow={setCurRow}
                    curRow={curRow}
                />
            </Box>
        </Stack>
    );
};

export default Body;

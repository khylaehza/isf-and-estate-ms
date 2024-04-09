import Header from "./Header";
import SideNav from "./SideNav";
import { Stack, Box } from "@mui/material";
import {
    CusSearch,
    CusIconBtn,
    CusPrimBtn,
    CusTable,
    CusModal,
    CusSort,
} from "../components";
import { FilterAltOutlined, SwapVertOutlined } from "@mui/icons-material";
const TableView = ({ rows, columns, open, setOpen, form, action }) => {
    return (
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
                    {/* <CusIconBtn
                        icon={
                            <SwapVertOutlined
                                sx={{ height: 20, width: 20, color: "#1C3055" }}
                            />
                        }
                    /> */}
                    <CusIconBtn
                        icon={
                            <FilterAltOutlined
                                sx={{ height: 20, width: 20, color: "#1C3055" }}
                            />
                        }
                    />

                    <CusModal
                        label={"+ Add user"}
                        open={open}
                        setOpen={setOpen}
                        form={form}
                        action={action}
                    />
                </Stack>
            </Stack>
            <CusTable rows={rows} columns={columns} />
        </Box>
    );
};
const Body = ({
    module,
    number,
    rows,
    columns,
    open,
    setOpen,
    form,
    action,
}) => {
    return (
        <Stack gap={3}>
            <Header module={module} number={number} />
            <TableView
                rows={rows}
                columns={columns}
                open={open}
                setOpen={setOpen}
                form={form}
                action={action}
            />
        </Stack>
    );
};

export default Body;

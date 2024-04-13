import Header from "./Header";
import { Stack, Box } from "@mui/material";
import {
    CusSearch,
    CusPrimBtn,
    CusTable,
    CusSort,
    CusFilter,
} from "../components";
import { useState } from "react";
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
    setCurSearch,
    curSearch,
    setCurFilter,
    filterBy,
    curFilter,
    viewFormLayout,
    setOpenView,
}) => {
    const [sortType, setSortType] = useState("Ascending");
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
                    <CusSearch
                        setCurSearch={setCurSearch}
                        curSearch={curSearch}
                    />

                    <Stack
                        gap={2}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                    >
                        <CusSort
                            setSortType={setSortType}
                            sortType={sortType}
                        />

                        <CusFilter
                            filterBy={filterBy}
                            setCurFilter={setCurFilter}
                            curFilter={curFilter}
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
                    sortType={sortType}
                    viewFormLayout={viewFormLayout}
                    setOpenView={setOpenView}
                />
            </Box>
        </Stack>
    );
};

export default Body;

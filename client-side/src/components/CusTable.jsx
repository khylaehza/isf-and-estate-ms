import {
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import { CusIconBtn } from "./CusButton";
import {
    RemoveRedEyeRounded,
    EditRounded,
    DeleteRounded,
} from "@mui/icons-material";
import CusAlert from "./CusAlert";
import CusModal from "./CusModal";
const CusTable = ({
    rows,
    columns,
    editForm,
    editFormLayout,
    setOpenEdit,
    setCurRow,
    curRow,
}) => {
    const [delOpen, setDelOpen] = useState(false);
    const [curDelRow, setCurDelRow] = useState();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper
            sx={{
                width: "100%",
                overflow: "hidden",
                boxShadow: "0px 0px 2px rgba(76, 96, 133, 0.6)",
                border: "none",
            }}
        >
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        backgroundColor: "#EFF1F4",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell
                                align={"right"}
                                style={{
                                    backgroundColor: "#EFF1F4",
                                    paddingRight: 30,
                                }}
                            >
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    sx={{ fontSize: 12 }}
                                                >
                                                    {column.format &&
                                                    typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell align={"right"}>
                                            <Stack
                                                flexDirection={"row"}
                                                gap={1}
                                                justifyContent={"flex-end"}
                                            >
                                                <CusIconBtn
                                                    color="#f1e6bd"
                                                    w={24}
                                                    h={24}
                                                    icon={
                                                        <RemoveRedEyeRounded
                                                            sx={{
                                                                height: 15,
                                                                width: 15,
                                                                color: "#1C3055",
                                                            }}
                                                        />
                                                    }
                                                />
                                                <CusIconBtn
                                                    color="#ccdace"
                                                    w={24}
                                                    h={24}
                                                    action={() => {
                                                        setOpenEdit(true);
                                                        setCurRow(row);
                                                    }}
                                                    icon={
                                                        <EditRounded
                                                            sx={{
                                                                height: 15,
                                                                width: 15,
                                                                color: "#1C3055",
                                                            }}
                                                        />
                                                    }
                                                />
                                                <CusIconBtn
                                                    color="#eaa196"
                                                    w={24}
                                                    h={24}
                                                    action={() => {
                                                        setDelOpen(true);
                                                        setCurDelRow(row.id);
                                                    }}
                                                    icon={
                                                        <DeleteRounded
                                                            sx={{
                                                                height: 15,
                                                                width: 15,
                                                                color: "#1C3055",
                                                            }}
                                                        />
                                                    }
                                                />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[4, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <CusAlert setOpen={setDelOpen} open={delOpen} id={curDelRow} />
            {editFormLayout}
        </Paper>
    );
};

export default CusTable;

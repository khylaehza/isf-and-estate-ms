import { useState } from "react";
import Body from "../layout/Body";
import { UserForms } from "../forms";
import axiosClient from "../axiosClient";
import { useData } from "../DataContext";

import { useFormik } from "formik";
import * as Yup from "yup";

const UserRegPage = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [curSearch, setCurSearch] = useState("");
    const [curFilter, setCurFilter] = useState("All");

    const filterBy = [
        "Super Admin",
        "Admin",
        "ISF Admin",
        "Estate Admin",
        "All",
    ];
    const [curRow, setCurRow] = useState({
        fname: "",
        mname: "N/A",
        lname: "",
        uname: "",
        role: "",
        email: "",
        department: "",
        password: "",
        updated_at: "",
    });

    const { users } = useData();

    // add users
    const form = useFormik({
        initialValues: {
            fname: "",
            mname: "",
            lname: "",
            uname: "",
            role: "",
            email: "",
            department: "",
            password: "",
            conpass: "",
        },
        validationSchema: Yup.object({
            fname: Yup.string().required("First name is required."),
            lname: Yup.string().required("Last name is required."),
            uname: Yup.string().required("Username is required."),
            role: Yup.string().required("Role is required."),
            email: Yup.string().required("Email is required."),
            department: Yup.string().required("Department is required."),
            password: Yup.string().required("Password is required."),
            conpass: Yup.string().required("Confirm password is required."),
        }),
        onSubmit: (value, actions) => {
            if (value.password == value.conpass) {
                axiosClient
                    .post("/user", value)
                    .then((data) => {
                        if (data.data.status) {
                            console.log(data.data);
                        } else {
                            console.log(data.data.message);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                console.log("pass not match");
            }

            actions.resetForm();
        },
    });

    // edit user
    const editForm = useFormik({
        initialValues: curRow,
        enableReinitialize: true,
        onSubmit: (value, actions) => {
            axiosClient
                .put(`/user/${value.id}`, value)
                .then((data) => {
                    if (data.status) {
                        console.log(data.data);
                    } else {
                        console.log(data.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            actions.resetForm();
        },
    });

    // fetch users
    const columns = [
        { id: "id", label: "ID", minWidth: 100 },
        { id: "name", label: "Name", minWidth: 170 },
        {
            id: "role",
            label: "Role",
            minWidth: 150,
            align: "left",
        },
        {
            id: "department",
            label: "Department",
            minWidth: 150,
            align: "left",
        },
        {
            id: "uname",
            label: "Username",
            minWidth: 150,
            align: "left",
        },
    ];

    function createData(
        id,
        name,
        role,
        department,
        uname,
        fname,
        mname,
        lname,
        email,
        updated_at
    ) {
        return {
            id,
            name,
            role,
            department,
            uname,
            fname,
            mname,
            lname,
            email,
            updated_at,
        };
    }

    let rows = users
        .filter((data) => {
            const { fname, mname, lname } = data;
            let name = `${fname} ${
                mname ? `${mname.charAt(0)}.` : "N/A"
            } ${lname}`.toLowerCase();

            return curSearch.toLowerCase() === ""
                ? data
                : name.includes(curSearch.toLowerCase());
        })
        .filter((data) => {
            return curFilter == "" || curFilter == "All"
                ? data
                : curFilter == data.role;
        })
        .map((dataMap) => {
            const {
                id,
                fname,
                mname,
                lname,
                role,
                department,
                uname,
                email,
                updated_at,
            } = dataMap;
            let name = `${fname} ${
                mname ? `${mname.charAt(0)}.` : "N/A"
            } ${lname}`;

            let mnameVal = mname ? mname : "N/A";
            return createData(
                id,
                name,
                role,
                department,
                uname,
                fname,
                mnameVal,
                lname,
                email,
                updated_at
            );
        });

    return (
        <>
            {rows && (
                <Body
                    module={"User"}
                    number={rows.length < 10 ? `0${rows.length}` : rows.length}
                    rows={rows}
                    columns={columns}
                    setOpen={setOpenAdd}
                    addFormLayout={
                        <UserForms
                            label={"Add new user"}
                            method={"ADD"}
                            form={form}
                            open={openAdd}
                            setOpen={setOpenAdd}
                            action={() => setOpenAdd(false)}
                        />
                    }
                    editForm={editForm}
                    editFormLayout={
                        <UserForms
                            label={"Edit user"}
                            method={"EDIT"}
                            form={editForm}
                            open={openEdit}
                            setOpen={setOpenEdit}
                            action={() => setOpenEdit(false)}
                        />
                    }
                    viewFormLayout={
                        <UserForms
                            label={"View user"}
                            method={"VIEW"}
                            form={editForm}
                            open={openView}
                            setOpen={setOpenView}
                            action={() => setOpenView(false)}
                            disabled={true}
                            updated={curRow.updated_at}
                        />
                    }
                    setOpenEdit={setOpenEdit}
                    setCurRow={setCurRow}
                    curRow={curRow}
                    setCurSearch={setCurSearch}
                    curSearch={curSearch}
                    setCurFilter={setCurFilter}
                    filterBy={filterBy}
                    curFilter={curFilter}
                    setOpenView={setOpenView}
                />
            )}
        </>
    );
};

export default UserRegPage;

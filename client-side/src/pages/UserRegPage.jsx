import { useState } from "react";
import Body from "../layout/Body";
import { UserForms } from "../forms";
import axiosClient from "../axiosClient";
import { useData } from "../DataContext";
const UserRegPage = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const { setUser, setToken } = useData();
    // add user
    const [userForm, setUserForm] = useState({
        fname: "",
        mname: "",
        lname: "",
        uname: "",
        role: "",
        email: "",
        department: "",
        password: "",
        // conpass: "",
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserForm({ ...userForm, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient
            .post("/register", userForm)
            .then((data) => {
                setUser(data.user);
                setToken(data.token);
                console.log("data", data);
                console.log("success");
            })
            .catch((err) => {
                const response = err.response;

                console.log(err);
                if (response && response.status == 422) {
                    console.log(response.data.errors);
                }
            });
    };

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
            id: "username",
            label: "Username",
            minWidth: 150,
            align: "left",
        },
    ];

    function createData(id, name, role, department, username) {
        return { id, name, role, department, username };
    }

    const rows = [
        createData(
            "01",
            "John Visca",
            "Super Admin",
            "DILG Manila",
            "johnvisca"
        ),
        createData(
            "02",
            "Jake Zander Borbon",
            "Admin",
            "DILG Manila",
            "jzborbon"
        ),
        createData(
            "03",
            "Clint Jairus Bon",
            "ISF Admin",
            "DILG Manila",
            "bonclint"
        ),
        createData(
            "04",
            "Godfrey Orlando",
            "Estate Admin",
            "DILG Manila",
            "godfrey"
        ),
    ];

    return (
        <Body
            module={"User"}
            number={1}
            rows={rows}
            columns={columns}
            open={openAdd}
            setOpen={setOpenAdd}
            form={<UserForms handleInput={handleInput} form={userForm} />}
            action={handleSubmit}
        />
    );
};

export default UserRegPage;

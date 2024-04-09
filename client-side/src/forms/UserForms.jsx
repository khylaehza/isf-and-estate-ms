import { Grid } from "@mui/material";
import { CusFormInput, CusSelect } from "../components";

const UserForms = ({ form, handleInput }) => {
    const roleList = ["Super Admin", "Admin", "ISF Admin", "Estate Admin"];
    const depList = ["DILG Manila", "Dep1", "Dep2"];
    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
        >
            <Grid item xs={2} sm={4} md={4}>
                <CusFormInput
                    name="fname"
                    label="Given Name"
                    required={true}
                    placeholder={"Juan"}
                    value={form.fname}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <CusFormInput
                    name="mname"
                    label="Middle Name"
                    required={true}
                    placeholder={"Rizal"}
                    value={form.mname}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <CusFormInput
                    name="lname"
                    label="Last Name"
                    required={true}
                    placeholder={"Dela Cruz"}
                    value={form.lname}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <CusFormInput
                    name="uname"
                    label="Username"
                    required={true}
                    placeholder={"Juan"}
                    value={form.uname}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <CusSelect
                    name="role"
                    label="Role"
                    required={true}
                    value={form.role}
                    onChange={handleInput}
                    items={roleList}
                />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <CusSelect
                    name="department"
                    label="Department"
                    required={true}
                    value={form.department}
                    onChange={handleInput}
                    items={depList}
                />
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
                <CusFormInput
                    name="email"
                    label="Email"
                    required={true}
                    value={form.email}
                    onChange={handleInput}
                    placeholder={"juan@gmail.com"}
                />
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
                <CusFormInput
                    name="password"
                    label="Password"
                    required={true}
                    placeholder={"•••••••"}
                    type={"password"}
                    value={form.pass}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <CusFormInput
                    name="conpass"
                    label="Confirm Password"
                    required={true}
                    placeholder={"•••••••"}
                    type={"password"}
                    value={form.conpass}
                    onChange={handleInput}
                />
            </Grid>
        </Grid>
    );
};

export default UserForms;

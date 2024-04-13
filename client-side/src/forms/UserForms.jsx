import { Grid, IconButton } from "@mui/material";
import { CusFormInput, CusSelect, CusModal } from "../components";
import { useState } from "react";
import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
const UserForms = ({
    label,
    form,
    open,
    setOpen,
    action,
    method,
    disabled,
    updated,
}) => {
    const roleList = ["Super Admin", "Admin", "ISF Admin", "Estate Admin"];
    const depList = ["DILG Manila", "Dep1", "Dep2"];

    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () => setShowPass((show) => !show);
    const [showConPass, setShowConPass] = useState(false);
    const handleShowConPass = () => setShowConPass((show) => !show);
    const handleMouseDown = (event) => {
        event.preventDefault();
    };
    return (
        <CusModal
            label={label}
            setOpen={setOpen}
            open={open}
            form={form}
            action={action}
            method={method}
            updated={updated}
            addFormLayout={
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
                            value={form.values.fname}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={form.errors.fname}
                            touch={form.touched.fname}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusFormInput
                            name="mname"
                            label="Middle Name"
                            required={false}
                            placeholder={"Rizal"}
                            value={form.values.mname}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            touch={form.touched.mname}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusFormInput
                            name="lname"
                            label="Last Name"
                            required={true}
                            placeholder={"Dela Cruz"}
                            value={form.values.lname}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={form.errors.lname}
                            touch={form.touched.lname}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusFormInput
                            name="uname"
                            label="Username"
                            required={true}
                            placeholder={"Juan"}
                            value={form.values.uname}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={form.errors.uname}
                            touch={form.touched.uname}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusSelect
                            name="role"
                            label="Role"
                            required={true}
                            value={form.values.role}
                            onChange={form.handleChange}
                            items={roleList}
                            onBlur={form.handleBlur}
                            error={form.errors.role}
                            touch={form.touched.role}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusSelect
                            name="department"
                            label="Department"
                            required={true}
                            value={form.values.department}
                            onChange={form.handleChange}
                            items={depList}
                            onBlur={form.handleBlur}
                            error={form.errors.department}
                            touch={form.touched.department}
                            disabled={disabled}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={method == "VIEW" ? 12 : 2}
                        sm={method == "VIEW" ? 12 : 4}
                        md={method == "VIEW" ? 12 : 4}
                    >
                        <CusFormInput
                            name="email"
                            label="Email"
                            required={true}
                            value={form.values.email}
                            onChange={form.handleChange}
                            placeholder={"juan@gmail.com"}
                            onBlur={form.handleBlur}
                            error={form.errors.email}
                            touch={form.touched.email}
                            disabled={disabled}
                        />
                    </Grid>

                    {method != "VIEW" && (
                        <>
                            <Grid item xs={2} sm={4} md={4}>
                                <CusFormInput
                                    name="password"
                                    label={
                                        method == "EDIT"
                                            ? "New Password"
                                            : "Password"
                                    }
                                    required={true}
                                    placeholder={"•••••••"}
                                    type={"password"}
                                    value={form.values.pass}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    error={form.errors.pass}
                                    touch={form.touched.pass}
                                    endAdornment={
                                        <IconButton
                                            onClick={handleShowPass}
                                            onMouseDown={handleMouseDown}
                                        >
                                            {showPass ? (
                                                <VisibilityOffRounded
                                                    sx={{
                                                        color: "#4C6085",
                                                        fontSize: 16,
                                                    }}
                                                />
                                            ) : (
                                                <VisibilityRounded
                                                    sx={{
                                                        color: "#4C6085",
                                                        fontSize: 16,
                                                    }}
                                                />
                                            )}
                                        </IconButton>
                                    }
                                />
                            </Grid>
                            <Grid item xs={2} sm={4} md={4}>
                                <CusFormInput
                                    name="conpass"
                                    label={
                                        method == "EDIT"
                                            ? "Confirm New Password"
                                            : "Confirm Password"
                                    }
                                    required={true}
                                    placeholder={"•••••••"}
                                    type={"password"}
                                    value={form.values.conpass}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    error={form.errors.conpass}
                                    touch={form.touched.conpass}
                                    endAdornment={
                                        <IconButton
                                            onClick={handleShowConPass}
                                            onMouseDown={handleMouseDown}
                                        >
                                            {showConPass ? (
                                                <VisibilityOffRounded
                                                    sx={{
                                                        color: "#4C6085",
                                                        fontSize: 16,
                                                    }}
                                                />
                                            ) : (
                                                <VisibilityRounded
                                                    sx={{
                                                        color: "#4C6085",
                                                        fontSize: 16,
                                                    }}
                                                />
                                            )}
                                        </IconButton>
                                    }
                                />
                            </Grid>
                        </>
                    )}
                </Grid>
            }
        />
    );
};

export default UserForms;

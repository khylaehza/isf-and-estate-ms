import { Grid } from "@mui/material";
import { CusFormInput, CusSelect, CusModal } from "../components";
import { useData } from "../DataContext";
const ISFForms = ({
    label,
    form,
    open,
    setOpen,
    action,
    method,
    disabled,
    updated,
}) => {
    const { districts, brgys } = useData();

    const civilStatsList = ["Married", "Single", "Widowed", "Separated"];
    const typeLocationList = [
        "Government Properties",
        "Public Properties",
        "Private Properties",
        "Others",
    ];
    const specLocationList = ["Near River", "Others"];
    const incomeBracketList = [
        "Rich (₱182,000 and up)",
        "High Income (₱109,200 - ₱182,000)",
        "Upper Middle Income (₱63,700 - ₱109,200)",
        "Middle Class (₱36,400 - ₱63,700)",
        "Lower Middle Class (₱18,200 - ₱36,400)",
        "Low Income (₱9,100 - ₱18,200)",
        "Poor (Less than ₱9,100)",
    ];

    let zoneList = [];
    let startZone = 0;
    let endZone = 0;

    districts.map((dst) => {
        if (dst.name == form.values.district) {
            startZone = dst.startZone;
            endZone = dst.endZone;
        }
    });
    for (let i = startZone; i <= endZone; i++) {
        zoneList.push(i);
    }

    let brgyList = [];
    let startBrgy = 0;
    let endBrgy = 0;

    brgys.map((data) => {
        if (data.zone == form.values.zone) {
            startBrgy = data.min;
            endBrgy = data.max;
        }
    });
    for (let i = startBrgy; i <= endBrgy; i++) {
        brgyList.push(i);
    }
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
                    <Grid item xs={2} sm={8} md={4}>
                        <CusFormInput
                            name="name"
                            label="Head of the Family"
                            required={true}
                            placeholder={
                                "Given Name/Middle Initial/Family Name"
                            }
                            value={form.values.name}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={form.errors.name}
                            touch={form.touched.name}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusFormInput
                            name="bday"
                            label="Date of Birth"
                            required={true}
                            placeholder={"MM/DD/YYYY"}
                            value={form.values.bday}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={form.errors.bday}
                            touch={form.touched.bday}
                            disabled={disabled}
                        />
                    </Grid>

                    <Grid item xs={2} sm={4} md={4}>
                        <CusSelect
                            name="civilStats"
                            label="Civil Status"
                            required={true}
                            value={form.values.civilStats}
                            onChange={form.handleChange}
                            items={civilStatsList}
                            onBlur={form.handleBlur}
                            error={form.errors.civilStats}
                            touch={form.touched.civilStats}
                            disabled={disabled}
                        />
                    </Grid>

                    <Grid item xs={2} sm={4} md={4}>
                        <CusFormInput
                            name="childQuan"
                            label="No. Of Children"
                            required={true}
                            placeholder={"0"}
                            value={form.values.childQuan}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={form.errors.childQuan}
                            touch={form.touched.childQuan}
                            disabled={disabled}
                            type="number"
                            inputProps={{ min: 0, max: 100 }}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={8}>
                        <CusSelect
                            name="incomeBracket"
                            label="Income Bracket"
                            required={true}
                            value={form.values.incomeBracket}
                            onChange={form.handleChange}
                            items={incomeBracketList}
                            onBlur={form.handleBlur}
                            error={form.errors.incomeBracket}
                            touch={form.touched.incomeBracket}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusSelect
                            name="zone"
                            label="Zone"
                            required={true}
                            value={form.values.zone}
                            onChange={form.handleChange}
                            items={zoneList}
                            onBlur={form.handleBlur}
                            error={form.errors.zone}
                            touch={form.touched.zone}
                            disabled={
                                form.values.district == ""
                                    ? true
                                    : false || disabled
                            }
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusSelect
                            name="brgy"
                            label="Brgy"
                            required={true}
                            value={form.values.brgy}
                            onChange={form.handleChange}
                            items={brgyList}
                            onBlur={form.handleBlur}
                            error={form.errors.brgy}
                            touch={form.touched.brgy}
                            disabled={
                                form.values.zone == ""
                                    ? true
                                    : false || disabled
                            }
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusSelect
                            name="typeLocation"
                            label="Location Type"
                            required={true}
                            value={form.values.typeLocation}
                            onChange={form.handleChange}
                            items={typeLocationList}
                            onBlur={form.handleBlur}
                            error={form.errors.typeLocation}
                            touch={form.touched.typeLocation}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CusSelect
                            name="specLocation"
                            label="Specific Location"
                            required={true}
                            value={form.values.specLocation}
                            onChange={form.handleChange}
                            items={specLocationList}
                            onBlur={form.handleBlur}
                            error={form.errors.specLocation}
                            touch={form.touched.specLocation}
                            disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={8}>
                        <CusFormInput
                            name="imgLoc"
                            label="Location Image"
                            required={true}
                            placeholder={"0"}
                            value={form.values.imgLoc}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={form.errors.imgLoc}
                            touch={form.touched.imgLoc}
                            disabled={disabled}
                            type="file"
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={12}>
                        <CusFormInput
                            name="descLocation"
                            label="Location Description"
                            required={true}
                            placeholder={"0"}
                            value={form.values.descLocation}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            error={form.errors.descLocation}
                            touch={form.touched.descLocation}
                            disabled={disabled}
                            multiline={true}
                        />
                    </Grid>
                </Grid>
            }
        />
    );
};

export default ISFForms;

import { Body } from "../layout";
import { useState } from "react";
import { ISFForms } from "../forms";
import { useData } from "../DataContext";
import axiosClient from "../axiosClient";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
const ISFRegPage = () => {
    const { name } = useParams();
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [openDel, setOpenDel] = useState(false);
    const [openToast, setOpenToast] = useState(false);
    const [curSearch, setCurSearch] = useState("");
    const [curFilter, setCurFilter] = useState("All");
    const [variant, setVariant] = useState("");
    const [message, setMessage] = useState("");

    const { districts, loading } = useData();
    const districtInfo = districts.find(
        (dst) => `district${dst.name}` === name
    );

    const [curRow, setCurRow] = useState({
        name: "",
        bday: "",
        civilStat: "",
        childQuan: "",
        incomeBracket: "",
        district: districtInfo.name,
        zone: "",
        brgy: "",
        typeLocation: "",
        specLocation: "",
        imgLoc: "",
        descLocation: "",
    });

    const filterBy = ["All"];

    const form = useFormik({
        initialValues: {
            name: "",
            bday: "",
            civilStat: "",
            childQuan: "",
            incomeBracket: "",
            district: districtInfo.name,
            zone: "",
            brgy: "",
            typeLocation: "",
            specLocation: "",
            imgLoc: "",
            descLocation: "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            //  name: Yup.string().required("Estate is required."),
            //  housingQuan: Yup.number().required(
            //      "Housing quantity is required."
            //  ),
            //  status: Yup.string().required("Status is required."),
            //  address: Yup.string().required("Address is required."),
            //  brgy: Yup.number().required("Brgy is required."),
            //  zone: Yup.number().required("Zone is required."),
            //  district: Yup.number().required("District is required."),
        }),
        onSubmit: (value, actions) => {
            setVariant("error");
            setMessage("crud function to be added");
            setOpenToast(true);
            setOpenAdd(false);
            //  axiosClient
            //      .post("/estate", value)
            //      .then((data) => {
            //          if (data.status == 200 || data.status == 201) {
            //              setEstates([...estates, data.data]);
            //              setVariant("success");
            //              setMessage("Estate successfully added.");
            //              setOpenToast(true);
            //          } else {
            //              console.log(data.data.message);
            //          }
            //      })
            //      .catch((error) => {
            //          setVariant("error");
            //          setMessage(error.response.data.message);
            //          setOpenToast(true);
            //      });
            //  setOpenAdd(false);
            //  actions.resetForm();
        },
    });

    const editForm = useFormik({
        initialValues: curRow,
        enableReinitialize: true,
        onSubmit: (value, actions) => {
            //  axiosClient
            //      .put(`/estate/${value.id}`, value)
            //      .then((data) => {
            //          if (data.status == 200 || data.status == 201) {
            //              setEstates(
            //                  estates.map((estate) =>
            //                      estate.id === data.data.id ? data.data : estate
            //                  )
            //              );
            //              setVariant("success");
            //              setMessage("Estate successfully edited.");
            //              setOpenToast(true);
            //          } else {
            //              console.log(data.message);
            //          }
            //      })
            //      .catch((error) => {
            //          setVariant("error");
            //          setMessage(error.response.data.message);
            //          setOpenToast(true);
            //      });
            //  setOpenEdit(false);
        },
    });

    const columns = [
        { id: "id", label: "ID", minWidth: 100 },
        { id: "name", label: "Head of the Family", minWidth: 170 },
        {
            id: "income",
            label: "Income Bracket",
            minWidth: 170,
        },

        {
            id: "brgy",
            label: "Brgy",
            minWidth: 140,
        },
        {
            id: "children",
            label: "No. of Children",
            minWidth: 170,
        },

        {
            id: "specLocation",
            label: "Specific Location",
            minWidth: 150,
        },
    ];

    function createData(
        id,
        name,
        specLocation,
        typeLocation,
        bday,
        incomeBracket,
        childQuan,
        civilStat,
        descLocation,
        brgy,
        zone,
        imgLoc
    ) {
        return {
            id,
            name,
            specLocation,
            typeLocation,
            bday,
            incomeBracket,
            childQuan,
            civilStat,
            descLocation,
            brgy,
            zone,
            imgLoc,
        };
    }

    let rows = [];

    const handleDelete = () => {
        // axiosClient
        //     .delete(`/estate/${curRow.id}`)
        //     .then(() => {
        //         setEstates(estates.filter((estate) => estate.id !== curRow.id));
        //         setOpenDel(false);
        //         setVariant("success");
        //         setMessage("Estate successfully deleted.");
        //         setOpenToast(true);
        //     })
        //     .catch((error) => {
        //         setVariant("error");
        //         setMessage(error.response.data.message);
        //         setOpenToast(true);
        //     });
    };

    return (
        <>
            {districtInfo && (
                <Body
                    moduleHeader={"Informal Settlers Family (ISFs)"}
                    module={"ISF"}
                    location={
                        districtInfo.name
                            ? `District ${districtInfo.name} `
                            : `district`
                    }
                    number={rows.length < 10 ? `0${rows.length}` : rows.length}
                    rows={rows.length == 0 ? [] : rows}
                    columns={columns}
                    setOpen={setOpenAdd}
                    addFormLayout={
                        <ISFForms
                            label={"Add new ISF"}
                            method={"ADD"}
                            open={openAdd}
                            setOpen={setOpenAdd}
                            form={form}
                            action={() => {
                                setOpenAdd(false);
                                form.resetForm();
                            }}
                        />
                    }
                    editFormLayout={
                        <ISFForms
                            label={"Edit ISF"}
                            method={"EDIT"}
                            form={editForm}
                            open={openEdit}
                            setOpen={setOpenEdit}
                            action={() => setOpenEdit(false)}
                        />
                    }
                    viewFormLayout={
                        <ISFForms
                            label={"View ISF"}
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
                    setOpenDel={setOpenDel}
                    openDel={openDel}
                    handleDelete={handleDelete}
                    variant={variant}
                    message={message}
                    setOpenToast={setOpenToast}
                    openToast={openToast}
                />
            )}
        </>
    );
};

export default ISFRegPage;

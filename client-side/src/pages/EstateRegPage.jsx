import { Body } from "../layout";
import { useState } from "react";
import { EstateForms } from "../forms";
import { useData } from "../DataContext";
import axiosClient from "../axiosClient";
import { useFormik } from "formik";
import * as Yup from "yup";
const EstateRegPage = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [openDel, setOpenDel] = useState(false);
    const [openToast, setOpenToast] = useState(false);
    const [curSearch, setCurSearch] = useState("");
    const [curFilter, setCurFilter] = useState("All");
    const [variant, setVariant] = useState("");
    const [message, setMessage] = useState("");
    // const { estates, setEstates } = useData();

    const [curRow, setCurRow] = useState({
        // name: "",
        // startZone: "",
        // endZone: "",
        // startBrgy: "",
        // endBrgy: "",
        // updated_at: "",
    });

    const filterBy = ["All"];

    const form = useFormik({
        // initialValues: {
        //     name: "",
        //     startZone: "",
        //     endZone: "",
        //     startBrgy: "",
        //     endBrgy: "",
        // },
        // validationSchema: Yup.object({
        //     name: Yup.number().required("District number is required."),
        //     startZone: Yup.number().required("Start zone is required."),
        //     endZone: Yup.number()
        //         .required("End zone is required.")
        //         .min(
        //             Yup.ref("startZone"),
        //             "End zone must be greater than start zone."
        //         ),
        //     startBrgy: Yup.number().required("Start brgy is required."),
        //     endBrgy: Yup.number()
        //         .required("End brgy is required.")
        //         .min(
        //             Yup.ref("startBrgy"),
        //             "End brgy must be greater than start brgy."
        //         ),
        // }),
        // onSubmit: (value, actions) => {
        //     axiosClient
        //         .post("/district", value)
        //         .then((data) => {
        //             if (data.status == 200 || data.status == 201) {
        //                 setDistricts([...districts, data.data]);
        //                 setVariant("success");
        //                 setMessage("District successfully added.");
        //                 setOpenToast(true);
        //             } else {
        //                 console.log(data.data.message);
        //             }
        //         })
        //         .catch((error) => {
        //             setVariant("error");
        //             setMessage(error.response.data.message);
        //             setOpenToast(true);
        //         });
        //     setOpenAdd(false);
        //     actions.resetForm();
        // },
    });

    const editForm = useFormik({
        //  initialValues: curRow,
        //  enableReinitialize: true,
        //  onSubmit: (value, actions) => {
        //      axiosClient
        //          .put(`/district/${value.id}`, value)
        //          .then((data) => {
        //              if (data.status == 200 || data.status == 201) {
        //                  setDistricts(
        //                      districts.map((district) =>
        //                          district.id === data.data.id
        //                              ? data.data
        //                              : district
        //                      )
        //                  );
        //                  setVariant("success");
        //                  setMessage("District successfully added.");
        //                  setOpenToast(true);
        //              } else {
        //                  console.log(data.message);
        //              }
        //          })
        //          .catch((error) => {
        //              setVariant("error");
        //              setMessage(error.response.data.message);
        //              setOpenToast(true);
        //          });
        //      setOpenEdit(false);
        //      actions.resetForm();
        //  },
    });

    const columns = [
        { id: "id", label: "ID", minWidth: 100 },
        { id: "name", label: "Name", minWidth: 170 },
        {
            id: "address",
            label: "Address",
            minWidth: 170,
        },

        {
            id: "zone",
            label: "Zone",
            minWidth: 100,
        },
        {
            id: "brgy",
            label: "Brgy",
            minWidth: 100,
        },
        { id: "district", label: "District", minWidth: 100 },
        {
            id: "housingQuan",
            label: "No. of Housing",
            minWidth: 170,
        },
        {
            id: "size",
            label: "Size",
            minWidth: 170,
        },
        {
            id: "status",
            label: "Status",
            minWidth: 170,
        },
    ];

    function createData(
        id,
        disName,
        zone,
        brgy,
        updated_at,
        startZone,
        endZone,
        startBrgy,
        endBrgy,
        name
    ) {
        return {
            id,
            disName,
            name,
            zone,
            brgy,
            updated_at,
            startZone,
            endZone,
            startBrgy,
            endBrgy,
        };
    }

    let rows = [];

    const handleDelete = () => {
        // axiosClient
        //     .delete(`/district/${curRow.id}`)
        //     .then(() => {
        //         setDistricts(
        //             districts.filter((district) => district.id !== curRow.id)
        //         );
        //         setOpenDel(false);
        //         setVariant("success");
        //         setMessage("District successfully added.");
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
            <Body
                module={"Estate"}
                number={rows.length < 10 ? `0${rows.length}` : rows.length}
                rows={rows.length == 0 ? [] : rows}
                columns={columns}
                setOpen={setOpenAdd}
                addFormLayout={
                    <EstateForms
                        label={"Add new estate"}
                        method={"ADD"}
                        open={openAdd}
                        setOpen={setOpenAdd}
                        form={form}
                        action={() => setOpenAdd(false)}
                    />
                }
                editFormLayout={
                    <EstateForms
                        label={"Edit estate"}
                        method={"EDIT"}
                        form={editForm}
                        open={openEdit}
                        setOpen={setOpenEdit}
                        action={() => setOpenEdit(false)}
                    />
                }
                viewFormLayout={
                    <EstateForms
                        label={"View estate"}
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
        </>
    );
};

export default EstateRegPage;

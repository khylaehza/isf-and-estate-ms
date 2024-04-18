import { Body } from "../layout";
import { useState } from "react";
// import { ISFForms } from "../forms";
import { useData } from "../DataContext";
import axiosClient from "../axiosClient";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
const AwardeeRegPage = () => {
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

    const { estates, loading } = useData();
    const estateInfo = estates.find((dst) => `estate${dst.name}` === name);

    const [curRow, setCurRow] = useState({
        //  name: "",
        //  bday: "",
        //  civilStat: "",
        //  childQuan: "",
        //  incomeBracket: "",
        //  district: estateInfo.name,
        //  zone: "",
        //  brgy: "",
        //  typeLocation: "",
        //  specLocation: "",
        //  imgLoc: "",
        //  descLocation: "",
    });

    const filterBy = ["All"];

    const form = useFormik({
        initialValues: {
            //  name: "",
            //  bday: "",
            //  civilStat: "",
            //  childQuan: "",
            //  incomeBracket: "",
            //  district: districtInfo.name,
            //  zone: "",
            //  brgy: "",
            //  typeLocation: "",
            //  specLocation: "",
            //  imgLoc: "",
            //  descLocation: "",
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
            console.log(value);
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

    return <div>to be added</div>;
};

export default AwardeeRegPage;

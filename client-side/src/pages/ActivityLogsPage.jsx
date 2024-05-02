import { Body } from "../layout";
import { useData } from "../DataContext";
import { useState } from "react";
const ActivityLogsPage = () => {
    const { logs } = useData();

    const [curSearch, setCurSearch] = useState("");
    const [curFilter, setCurFilter] = useState("All");

    const filterBy = [
        "Super Admin",
        "Admin",
        "ISF Admin",
        "Estate Admin",
        "All",
    ];

    const columns = [
        { id: "id", label: "ID", minWidth: 100 },
        { id: "name", label: "Name", minWidth: 170 },
        {
            id: "activity",
            label: "Activity",
            minWidth: 150,
        },
        {
            id: "type",
            label: "Type",
        },
    ];

    function createData(id, name, activity, type, updated_at) {
        return {
            id,
            name,
            activity,
            type,
            updated_at,
        };
    }

    let rows =
        logs.length > 0
            ? logs
                  .filter((data) => {
                      const { type } = data;
                      return curSearch.toLowerCase() === ""
                          ? data
                          : type.includes(curSearch.toLowerCase());
                  })
                  .filter((data) => {
                      return curFilter == "" || curFilter == "All"
                          ? data
                          : curFilter == data.role;
                  })
                  .map((dataMap) => {
                      const { id, name, activity, type, updated_at } = dataMap;
                      return createData(id, name, activity, type, updated_at);
                  })
            : [];
    return (
        <>
            <Body
                module={"Activity Logs"}
                number={rows.length < 10 ? `0${rows.length}` : rows.length}
                rows={rows.length == 0 ? [] : rows}
                columns={columns}
                setCurSearch={setCurSearch}
                curSearch={curSearch}
                setCurFilter={setCurFilter}
                filterBy={filterBy}
                curFilter={curFilter}
            />
        </>
    );
};

export default ActivityLogsPage;

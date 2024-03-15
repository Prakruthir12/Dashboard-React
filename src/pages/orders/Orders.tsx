import { GridColDef} from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./orders.scss"
import { useState } from "react";
import Add from "../../components/add/Add";
import { orderRows } from "../../data";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "orderList",
    headerName: "Order List",
    type: "string",
    width: 150,
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 175,
  },
  {
    field: "orderDate",
    headerName: "Order Date",
    width: 175,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Status",
    width: 150,
    type: "string",
    renderCell: (params) => {
      let backgroundColor = "";
      switch (params.value) {
        case "delivered":
          backgroundColor = "#A3D9A5"; // green
          break;
        case "pending":
          backgroundColor = "#F7E078"; // yellow
          break;
        case "not dispatched":
          backgroundColor = "#F28B82"; // red
          break;
        case "dispatched":
          backgroundColor = "#90CAF9"; // blue
          break;
        default:
          backgroundColor = "";
      }
      return <div style={{ backgroundColor }}>{params.value}</div>;
    },
  },
];


const Orders = () => {
  const [open, setOpen] = useState(false);

    // TEST THE API

  const { isLoading, data } = useQuery({
    queryKey: ["allorders"],
    queryFn: () =>
      fetch("http://localhost:8800/api/orders").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="orders">
      <div className="info">
        <h1>Orders</h1>
        <button onClick={() => setOpen(true)}>Add New Order</button>
      </div>
      {/* <DataTable slug="orders" columns={columns} rows={orderRows} /> */}

       {/* TEST THE API */}

       {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="orders" columns={columns} rows={data} />
      )}

      {open && <Add slug="order" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Orders

  


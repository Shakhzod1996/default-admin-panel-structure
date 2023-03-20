import React from "react";
import Chip from "@mui/material/Chip";
import { TTableStatus } from "types/common.types";

const TableItemStatus: React.FC<{ status: TTableStatus; label?: string }> = ({
     status,
     label,
}) => {
     let color: string = "gray";
     let background: string = "white";
     switch (status.toLowerCase()) {
          case "active":
          case "paid":
          case "push":
               color = "#00BC96";
               background = "rgba(0, 188, 150, 0.1)";
               break;
          case "archieve":
          case "inDept":
               color = "#666687";
               background = "rgba(102, 102, 135, 0.1)";
               break;
          case "pending":
               color = "#F2994A";
               background = "rgba(242, 153, 74, 0.1)";
               break;
          case "new":
          case "sms":
               color = "#03d148";
               background = "rgba(74, 242, 96, 0.1)";
               break;
          case "canceled":
          case "inactive":
               color = "#EB5757";
               background = "rgba(230, 49, 49, 0.1)";
               break;
          default:
               break;
     }
     return (
          <Chip
               label={label || status}
               sx={{ color, background, fontWeight: 700 }}
          />
     );
};

export default TableItemStatus;

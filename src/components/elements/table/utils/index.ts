import { GridColumns } from "@mui/x-data-grid";

export const getTableColumns = ({
     numerate,
     columns,
}: {
     numerate?: boolean;
     columns: GridColumns<any>;
}) =>
     [
          numerate
               ? {
                      field: "number",
                      headerName: "№",
                      width: 50,
                      align: "center",
                      sortable: false,
                      filterable: false,
                      headerAlign: "center",
                 }
               : undefined,
          ...columns,
     ]
          .filter((item) => item && item)
          .map((item) => ({
               ...item,
               headerClassName: "table-header",
          }));

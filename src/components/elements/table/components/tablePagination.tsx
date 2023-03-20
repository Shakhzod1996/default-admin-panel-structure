import Pagination from "@mui/material/Pagination";
import { get } from "lodash";
import React from "react";
import { TSetState } from "types/form";
import { IQueryParams } from "../Table.constants";

const TablePagination: React.FC<{
     setQueryParams: TSetState<IQueryParams>;
     tableData: any[];
     data: any;
     queryParams: IQueryParams;
}> = ({ data, setQueryParams, tableData, queryParams }) => {
     return (
          <div className="pagination-container">
               {tableData.length > 0 && (
                    <Pagination
                         count={Math.ceil(
                              get(data, "data.total", 1) / queryParams.limit
                         )}
                         variant="outlined"
                         shape="rounded"
                         onChange={(event, page) =>
                              setQueryParams((prev) => ({
                                   ...prev,
                                   page,
                              }))
                         }
                    />
               )}
          </div>
     );
};

export default TablePagination;

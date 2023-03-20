import React, { useEffect, useState } from "react";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { EmptyTable } from "assets/svgs";
import { motion } from "framer-motion";
import { useApi, useApiMutation } from "hooks/useApi/useApiHooks";
import useDebounce from "hooks/useDebounce";
import { get } from "lodash";
import TableHeader from "./components/tableHeader";
import TablePagination from "./components/tablePagination";

import { IQueryParams, ITable, ITableData } from "./Table.constants";
import { TableContainerMain } from "./Table.style";
import { getTableColumns } from "./utils";

const Table: React.FC<ITable> = ({
     dataUrl,
     columns,
     addable,
     searchable,
     setIsBarOpen,
     isAddedSuccess,
     IsSuccessfull,
     onRowClick = undefined,
     deletable = true,
     addTitle,
     selectOptions,
     selection = true,
     onAdd,
     deleteUrl,
     countUser,
     dataProp,
     design = "main",
     numerate,
     addWindowOpenHandler,
     headerChildren,
     FooterComponent = () => <></>,
     hasPagination = true,
     exQueryParams = {},
}) => {
     const [selectedRows, setSelectedRows] = useState<any>([]);
     const [search, setSearch] = useState("");
     const debValue = useDebounce(search, 500);
     const [isModalOpen, setIsModalOpen] = useState(false);

     const [queryParams, setQueryParams] = useState<IQueryParams>({
          page: 1,
          limit: 10,
          search: "",
     });

     const { data, status, refetch, isFetching } = useApi<ITableData>(dataUrl, {
          ...queryParams,
          ...exQueryParams,
     });
     const { mutate: deleteMutate, isSuccess } = useApiMutation(
          deleteUrl || dataUrl,
          "delete"
     );

     const handleClose = () => {
          setIsModalOpen(false);
     };

     const handleSubmitDeletedItems = () => {
          deleteMutate({
               _ids: selectedRows,
          });
          setIsModalOpen(false);
     };

     useEffect(() => {
          if (isSuccess) {
               refetch();
          }
     }, [isSuccess]);

     useEffect(() => {
          if (isAddedSuccess) {
               refetch();
          }
     }, [isAddedSuccess]);

     useEffect(() => {
          if (IsSuccessfull) {
               refetch();
          }
     }, [IsSuccessfull]);

     useEffect(() => {
          setQueryParams((prev) => ({ ...prev, search: search }));
     }, [debValue]);

     const showAnimation = {
          hidden: {
               width: 0,
               opacity: 0,
               transition: {
                    duration: 0.5,
               },
          },
          show: {
               width: "auto",
               opacity: 1,
               transition: {
                    duration: 0.2,
               },
          },
     };

     const tableData: any[] = React.useMemo(() => {
          const dataKey = dataProp ? get(data, dataProp, []) : data?.data?.data;
          return dataKey?.map((item: any, i: number) => ({
               ...item,
               number: i + 1,
          }));
     }, [data]);
     // @ts-ignore
     const tableColumns: GridColumns<any> = React.useMemo(
          () => getTableColumns({ columns, numerate }),
          [columns]
     );

     return (
          <>
               <TableContainerMain>
                    <TableHeader
                         searchable={searchable}
                         setSearch={setSearch}
                         search={search}
                         headerChildren={headerChildren}
                         deletable={deletable}
                         selectedRows={selectedRows}
                         addable={addable}
                         addTitle={addTitle}
                         handleSubmitDeletedItems={handleSubmitDeletedItems}
                         addWindowOpenHandler={addWindowOpenHandler}
                    />
                    <p className="user-info">{countUser}</p>
                    <motion.div
                         animate={{ width: "100%" }}
                         className="grid-container"
                    >
                         {tableData.length < 1 ? (
                              <div className="no-data-found">
                                   <EmptyTable />
                                   <h2>Bu yerda hech narsa yo'q</h2>
                              </div>
                         ) : (
                              <DataGrid
                                   getRowId={(row: any) => row._id}
                                   rows={tableData}
                                   columns={tableColumns}
                                   className={
                                        design === "secondary"
                                             ? "second-design"
                                             : design === "third"
                                             ? "third-design"
                                             : ""
                                   }
                                   pageSize={queryParams.limit}
                                   rowsPerPageOptions={[5, 10, 20]}
                                   loading={isFetching}
                                   hideFooterPagination
                                   onPageSizeChange={(newPageSize) =>
                                        setQueryParams((prev) => ({
                                             ...prev,
                                             limit: newPageSize,
                                        }))
                                   }
                                   onRowClick={(props) => onRowClick?.(props)}
                                   rowCount={
                                        dataProp
                                             ? tableData.length
                                             : data?.data?.total
                                   }
                                   onPageChange={(page, { reason }) =>
                                        console.log(page)
                                   }
                                   getRowClassName={(params) =>
                                        !!onRowClick ? "row-hover" : ""
                                   }
                                   checkboxSelection={selection}
                                   onSelectionModelChange={(rows, data) =>
                                        setSelectedRows(rows)
                                   }
                                   // paginationMode="server"
                                   sx={{ height: "100%" }}
                                   rowHeight={60}
                                   // hideFooter
                                   components={{
                                        Footer: () => (
                                             <div className="p-3">
                                                  <FooterComponent
                                                       tableData={tableData}
                                                  />
                                             </div>
                                        ),
                                   }}
                              />
                         )}
                    </motion.div>
                    {hasPagination && (
                         <TablePagination
                              data={data}
                              queryParams={queryParams}
                              setQueryParams={setQueryParams}
                              tableData={tableData}
                         />
                    )}
               </TableContainerMain>
          </>
     );
};

export default Table;

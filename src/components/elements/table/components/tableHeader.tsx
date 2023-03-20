import React from "react";
import { TableHeadContainer } from "../Table.style";
import { MainButton, SearchInput } from "components";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TSetState } from "types/form";

const TableHeader: React.FC<{
     searchable?: boolean;
     setSearch: TSetState<string>;
     search: string;
     headerChildren: React.ReactNode;
     deletable: boolean;
     selectedRows: any;
     addable?: boolean;
     addTitle?: string;
     addWindowOpenHandler?: () => void;
     handleSubmitDeletedItems: () => void;
}> = ({
     searchable,
     setSearch,
     search,
     headerChildren,
     deletable,
     selectedRows,
     addable,
     addTitle,
     handleSubmitDeletedItems,
     addWindowOpenHandler,
}) => {
     return (
          <TableHeadContainer className="table-header-container">
               <div className="header-flex">
                    <div className="table-header-right">
                         {searchable ? (
                              <SearchInput
                                   value={search}
                                   onChange={(e: any) =>
                                        setSearch(e?.target?.value)
                                   }
                              />
                         ) : (
                              <div></div>
                         )}
                         {headerChildren}
                    </div>

                    <div className="actions">
                         {deletable && (
                              <Button
                                   style={{ height: "43px" }}
                                   onClick={handleSubmitDeletedItems}
                                   variant="outlined"
                                   disabled={
                                        selectedRows.length <= 0 ? true : false
                                   }
                              >
                                   <DeleteIcon />
                              </Button>
                         )}
                         {addable ? (
                              <MainButton
                                   title={addTitle}
                                   onClick={addWindowOpenHandler}
                                   variant="contained"
                                   typeBtn="outlined"
                              />
                         ) : null}
                    </div>
               </div>
          </TableHeadContainer>
     );
};

export default TableHeader;

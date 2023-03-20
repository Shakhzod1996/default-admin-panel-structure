import { GridColumns, GridRowParams } from "@mui/x-data-grid";

export interface ITable {
     dataUrl: string;
     columns: GridColumns<any>;

     addable?: boolean;
     deletable?: boolean;
     searchable?: boolean;
     selection?: boolean;

     isAddedSuccess?: boolean;
     numerate?: boolean;
     IsSuccessfull?: boolean;
     hasPagination?: boolean;

     onRowClick?: (props: GridRowParams<any>) => void;
     setIsBarOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
     dataProp?: string;
     deleteUrl?: string;
     onAdd?: () => void;
     selectOptions?: [] | any;
     countUser?: string;
     addTitle?: string;
     headerChildren?: React.ReactNode;
     FooterComponent?: React.JSXElementConstructor<ITableFooter<any>>;
     design?: "main" | "secondary" | "third";
     addWindowOpenHandler?: () => void;
     exQueryParams?: object;
}
export interface ITableData {
     data: any;
     total: number;
}
export interface IQueryParams {
     limit: number;
     page: number;
     search: string;
}

export interface ITableFooter<T extends any> {
     tableData: T[];
}

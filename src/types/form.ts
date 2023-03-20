import React, { ReactNode } from "react";

export type IErrors =
     | {
            [key: string]: IFieldError;
       }
     | {};

export interface IFieldError {
     type: TFieldErrorType;
     message: string;
     ref: {
          name: string;
     };
}

export type TFieldErrorType = "required" | "pattern" | "min" | "max";
export interface IFormNames {
     [key: string]: string;
}

export interface ICustomProviderProps {
     children: ReactNode;
}
export interface IOption {
     _id: any;
     name: string;
}

export type TSetState<T> = React.Dispatch<React.SetStateAction<T>>;

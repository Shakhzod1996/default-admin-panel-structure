import { IFormNames, IErrors } from "types/form";

export function get<T>(
     object: { [key: string]: any } | undefined,
     path: string,
     defaultValue: any
): T | typeof defaultValue {
     const paths = Array.isArray(path) ? path : path.split(".");

     let index = 0;
     let len = paths.length;
     let obj = object;

     while (obj != null && index < len) {
          obj = obj[String(paths[index])];
          index++;
     }

     const value = index && index === len ? obj : undefined;

     return value !== undefined ? value : defaultValue;
}

export function getLastUrl<T>(pathName: string): T {
     return pathName.substring(pathName.lastIndexOf("/") + 1) as T;
}

export const firstErrorField = (FORM_NAMES: IFormNames, errors: IErrors) => {
     return Object.keys(FORM_NAMES).find((formName: string) =>
          Object.keys(errors).find(
               (errorName: string) => errorName === formName
          )
     );
};

export const moneyFormat = (moneyAmount: number) => {
     return moneyAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

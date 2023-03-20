import { FormControl, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import { IGetLangs } from "types/common.types";
import { SelectionStyle } from "./Selection.style";

export interface ISelection {
     languagesSelect: string;
     getLanguage: IGetLangs[] | undefined;
     handleChange: (event: SelectChangeEvent) => void;
     labelTitle: string;
}
const Selection = ({
     languagesSelect,
     getLanguage,
     handleChange,
     labelTitle,
}: ISelection) => {
     return (
          <SelectionStyle>
               <FormControl fullWidth>
                    <label className="select-label">{labelTitle}</label>
                    <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={languagesSelect}
                         label="Languages"
                         onChange={handleChange}
                    >
                         {getLanguage?.map((item) => {
                              return (
                                   <MenuItem key={item._id} value={item._id}>
                                        {item.name}
                                   </MenuItem>
                              );
                         })}
                    </Select>
               </FormControl>
          </SelectionStyle>
     );
};

export default Selection;

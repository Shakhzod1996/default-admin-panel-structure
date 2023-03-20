import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { SearchInputStyled } from "./SearchInput.styled";

interface ISearchInput {
     value: string;
     onChange: any;
}

const SearchInput: React.FC<ISearchInput> = ({ onChange, value }) => {
     return (
          <SearchInputStyled>
               <div className="search-box">
                    <button className="btn-search">
                         <SearchIcon />
                    </button>
                    <input
                         type="text"
                         className="input-search"
                         placeholder="Type to Search..."
                         value={value}
                         onChange={onChange}
                         autoFocus
                    />
               </div>
          </SearchInputStyled>
     );
};

export default SearchInput;

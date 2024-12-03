import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import SearchButton from "../Button/SearchButton";
import Description from "../Description/Description";

export default function Form() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setQuery(searchTerm);
  };

  return (
    <div>
      <FormControl
        variant="outlined"
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            marginLeft: "1rem",

            width: "40ch",
          }}
          id="outlined-basic"
          label="Search Word"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <SearchButton searchTerm={searchTerm} onSearch={handleSearch} />
      </FormControl>
      <div>
        <Description word={query} />
      </div>
    </div>
  );
}

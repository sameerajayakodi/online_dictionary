import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchButton from "../componets/Button/SearchButton";
export default function Form() {
  // eslint-disable-next-line no-undef
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <FormControl
      variant="outlined"
      style={{
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
      }}
    >
      <TextField
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        style={{
          width: "50ch",
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
      <SearchButton searchTerm={searchTerm} />
    </FormControl>
  );
}

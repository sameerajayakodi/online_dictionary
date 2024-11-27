import Button from "@mui/material/Button";
// eslint-disable-next-line react/prop-types
export default function SearchButton({ onSearch }) {
  return (
    <Button
      style={{
        height: "58px",
        borderRadius: "0px 10px 10px 0px",
        backgroundColor: "#1976d2",
        color: "white",
        fontFamily: "Inter",
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      variant="contained"
      onClick={onSearch}
    >
      Search
    </Button>
  );
}

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Description({ word }) {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!word) return;

    setLoading(true);
    setError("");
    setWordData(null);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Word not found");
        }
        return response.json();
      })
      .then((data) => {
        setWordData(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [word]);

  if (loading) {
    return <Typography color="white">Loading...</Typography>;
  }

  if (error) {
    return <Typography color="red">Error: {error}</Typography>;
  }

  if (!wordData) {
    return <Typography color="white"></Typography>;
  }

  return (
    <Box
      sx={{
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "left",
        }}
        gutterBottom
      >
        {wordData.word}
      </Typography>

      {wordData.phonetics.map((phonetic, index) => (
        <Card
          key={index}
          sx={{
            textAlign: "left",

            color: "white",
            marginBottom: "10px",
          }}
        >
          <CardContent>
            {phonetic.text && (
              <Typography variant="body1">Phonetic: {phonetic.text}</Typography>
            )}
            {phonetic.audio && (
              <CardMedia
                component="audio"
                controls
                src={phonetic.audio}
                sx={{
                  marginTop: "10px",

                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
            )}
          </CardContent>
        </Card>
      ))}

      {wordData.origin && (
        <Typography variant="body2">
          <strong>Origin:</strong> {wordData.origin}
        </Typography>
      )}

      <Typography variant="h5" gutterBottom sx={{ marginTop: "20px" }}>
        Meanings:
      </Typography>

      {wordData.meanings.map((meaning, index) => (
        <Box
          key={index}
          sx={{
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="subtitle1">
            Part of Speech: {meaning.partOfSpeech}
          </Typography>
          {meaning.definitions.map((definition, idx) => (
            <Box
              key={idx}
              sx={{
                marginLeft: "10px",
                marginTop: "10px",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <Typography variant="body1">
                <strong>Definition:</strong> {definition.definition}
              </Typography>
              {definition.example && (
                <Typography
                  style={{
                    padding: "5px",

                    fontStyle: "italic",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    fontSize: "0.8rem",
                  }}
                  variant="body2"
                  sx={{ marginTop: "5px" }}
                >
                  <strong>Example:</strong> {definition.example}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

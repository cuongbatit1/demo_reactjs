import { memo } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const GenreItem = (props) => {
  const { text, index } = props;
  const random = index % 3;
  let linearGradient = "linear-gradient(135.46deg, #00CBCF 0.78%, #007AD9 100%)";
  if (random === 0) {
    linearGradient = "linear-gradient(132.93deg, #7591E8 12.67%, #87CEF8 107.3%)";
  } else if (random === 1) {
    linearGradient = "linear-gradient(132.93deg, #FF80B5 12.67%, #FF5A9F 107.3%)";
  }
  return (
    <>
      {console.log("GenreItem Render ", text)}
      <Card
        sx={{
          width: 140,
          height: 80,
          background: linearGradient,
        }}
      >
        <CardActionArea sx={{ height: "100%", p: 0 }}>
          <CardContent sx={{ p: 0 }}>
            <Typography
              sx={{ color: "white", m: 0 }}
              gutterBottom
              align="center"
              variant="h6"
              component="div"
            >
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

GenreItem.propTypes = {
  text: PropTypes.string.isRequired,
};
export default memo(GenreItem);

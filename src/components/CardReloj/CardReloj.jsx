import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";

import "./CardReloj.css";

const CardReloj = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 310 }} className="margenTop">
      <CardActionArea className="containerImg">
        <CardMedia
          height="400px"
          component="img"
          image={data.img}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <div>
          <Button variant="contained" color="primary" className="cardBtnColor">
            Info
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardReloj;

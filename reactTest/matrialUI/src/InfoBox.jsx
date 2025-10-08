import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  return (
    <div className="infoBox">
      <div className="infoDiv">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://images.unsplash.com/photo-1614964494722-0546c3ce4b63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature : {info.temp}&deg;</p>
              <p>Humidity : {info.humidity}&deg;</p>
              <p>MinTemp : {info.tempMin}</p>
              <p>MaxTemp : {info.tempMax}</p>
              <p>
                The weather can be descibed as {info.weather} feels like{" "}
                {info.feelsLike}&deg;
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

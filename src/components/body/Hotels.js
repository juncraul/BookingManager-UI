import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchHotels,
  fetchImages,
  setHotels,
} from "../../redux/slices/hotelSlice";

const Hotels = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.hotels);
  const blobs = useSelector((state) => state.hotels.imageBlob);

  const fetchHotelsAndImage = () => {
    const hotels = JSON.parse(localStorage.getItem("hotels"));
    if (hotels !== null) {
      dispatch(setHotels(hotels));
      hotels.forEach((hotel) => {
        dispatch(fetchImages(hotel.mainImage));
      });
    } else {
      dispatch(fetchHotels());
      states.hotels.map((hotel) => {
        dispatch(fetchImages(hotel.mainImage));
        return 0;
      });
    }
  };

  useEffect(() => {
    fetchHotelsAndImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper sx={{ margin: "7rem 20%", position: "relative" }}>
      <Grid container spacing={2}>
        {states.hotel.map((hotel, index) => {
          return (
            <Grid key={hotel.id} item xs={4}>
              <Card
                sx={{
                  maxWidth: 2500,
                  position: "relative",
                  paddingBottom: "2rem",
                }}
              >
                <CardMedia
                  component="img"
                  height="340"
                  image={blobs.at(index)}
                  loading="lazy"
                />
                <CardContent>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {hotel.description}
                  </Typography>
                  <Link to={`hotel/${hotel.id}`}>
                    <Button
                      sx={{
                        position: "absolute",
                        right: "12px",
                        bottom: "12px",
                      }}
                      variant="contained"
                    >
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Hotels;

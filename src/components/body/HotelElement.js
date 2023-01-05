import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHotelById,
  fetchImageForOneHotel,
} from "../../redux/slices/hotelSlice";

const HotelElement = ({ id }) => {
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotels.hotelId);
  const image = useSelector((state) => state.hotels.imageId);
  const fetchHotel = () => {
    dispatch(fetchHotelById(id));
    dispatch(fetchImageForOneHotel(hotel.mainImage));
  };

  useEffect(() => {
    fetchHotel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: 2000,
        margin: "10rem 20%",
        maxHeight: 1500,
      }}
    >
      <CardMedia
        component="img"
        height="600"
        image={image}
        loading="lazy"
      />
      <CardContent>
        <Typography variant="h3">{hotel.name}</Typography>
        <Typography variant="h5" sx={{ marginTop: "2rem" }}>
          {hotel.description}
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: "5rem", marginLeft: "30rem" }}
        >
          Buy room
        </Button>
      </CardContent>
    </Card>
  );
};

export default HotelElement;

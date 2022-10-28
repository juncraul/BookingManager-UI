import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHotels,
  fetchImages,
  getUsersAndImage,
} from "../../redux/slices/hotelSlice";

const Hotels = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.hotels.hotel);
  const blobs = useSelector((state) => state.hotels.imageBlob);
  useEffect(() => {
    getUsersAndImage(dispatch);
  }, [dispatch]);
  return (
    <Paper sx={{ margin: "7rem 20%" }}>
      <Grid container spacing={2}>
        {state.map((hotel) => {
          console.log(blobs);
          return (
            <Grid key={hotel.id} item xs={4}>
              {hotel.name}
              {hotel.description}
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Hotels;

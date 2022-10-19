import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const GridItem = (props) => {
  return (
    <Box>
      <Card>
        <CardHeader title={props.name} />
        <CardMedia component="img" image={props.image} sx={{ height: "10%" }} />
        <CardContent>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "12px",
            marginBottom: "15px",
            marginLeft: "15px",
          }}
        >
          <IconButton>
            <Checkbox
              aria-label="favorite-checkbox"
              icon={<FavoriteBorder sx={{ width: 25, height: 25 }} />}
              checkedIcon={<Favorite sx={{ width: 25, height: 25 }} />}
              onClick={() => props.setCart(props.cart + 1)}
              onChange={() => props.setCart(props.cart - 1)}
            />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
};

export default GridItem;

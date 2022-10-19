import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import data from "../static-data/data";
import GridItem from "./GridItem";

const Hotels = (props) => {
  const [index, setIndex] = useState();
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (props.value !== null) {
      setIndex(data.findIndex((item) => item.name === props.value));
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [props.value]);
  return (
    <Box flex={4} p={2}>
      <Grid container spacing={2}>
        {!isEmpty && (
          <Grid key={data.at(index).id} item xs={4}>
            <GridItem
              key={data.at(index).findIndex}
              name={data.at(index).name}
              image={data.at(index).image}
              description={data.at(index).description}
              setCart={props.setCart}
              cart={props.cart}
            />
          </Grid>
        )}
        {isEmpty &&
          data.map((item) => (
            <Grid key={item.id} item xs={4}>
              <GridItem
                name={item.name}
                image={item.image}
                description={item.description}
                setCart={props.setCart}
                cart={props.cart}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Hotels;

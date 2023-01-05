import { useParams } from "react-router-dom";
import HotelElement from "../components/body/HotelElement";
import Navbar from "../components/navbar/Navbar";

const Hotel = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <HotelElement id={id} />
    </>
  );
};

export default Hotel;

import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import React from "react";

function HotelDetailsPage() {
  return (
    <>
      <Summary hotelId={id} />
      <Gallery hotelId={id} />
      <Overview hotelId={id} />
    </>
  );
}

export default HotelDetailsPage;

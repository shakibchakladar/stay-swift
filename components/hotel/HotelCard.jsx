import Image from "next/image";
import img from "@/public/assets/images/2.jpg"
import HotelSummaryInfo from "./HotelSummaryInfo";
const HotelCard = () => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={img}
        className="max-h-[162px] max-w-[240px]"
        alt="image"
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;

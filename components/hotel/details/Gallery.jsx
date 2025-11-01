// import Image from "next/image";
// import img1 from "@/public/fb.png"

// const Gallery = () => {
//   return (
//     <section className="container">
//       <div className="grid grid-cols-2 imageshowCase">
//         <img src="./assets/images/1.png" className="h-[400px]" alt="" />

//         <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
//           {/* <img src="./assets/images/2.png" alt="" />
//           <img src="./assets/images/3.png" alt="" />
//           <img src="./assets/images/4.png" alt="" />
//           <img src="./assets/images/5.png" alt="" /> */}

//           <Image src={img1} alt="1"/>
//           <Image src={img1} alt="2"/>
//           <Image src={img1} alt="3"/>
//           <Image src={img1} alt="4"/>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;
import Image from "next/image";
import img1 from "@/public/assets/images/1.jpg";
import img2 from "@/public/assets/images/2.jpg";
import img3 from "@/public/assets/images/3.jpg";
import img4 from "@/public/assets/images/4.jpg";

const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <div className="relative h-[400px] w-full">
          <Image
            src={img1}
            alt="Main Image"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[400px]">
          <div className="relative w-full h-full">
            <Image src={img2} alt="Gallery 2" fill className="object-cover rounded-lg" />
          </div>
          <div className="relative w-full h-full">
            <Image src={img3} alt="Gallery 3" fill className="object-cover rounded-lg" />
          </div>
          <div className="relative w-full h-full">
            <Image src={img4} alt="Gallery 4" fill className="object-cover rounded-lg" />
          </div>
          <div className="relative w-full h-full">
            <Image src={img4} alt="Gallery 5" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

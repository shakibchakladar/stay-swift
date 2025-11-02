
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import LogInOutBtn from "./LogInOutBtn";

const Navbar = async ({ sideNav }) => {
  const authenticUser = await auth();
  const user = authenticUser?.user;

  return (
    <nav>
      <Link href="/">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200}
        />
      </Link>

      {sideNav && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact us</Link>
          </li>
          <li>
            <Link href="/bookings">Bookings</Link>
          </li>
         <LogInOutBtn user={user}/>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

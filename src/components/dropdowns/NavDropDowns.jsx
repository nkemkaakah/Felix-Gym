/* eslint-disable react/prop-types */
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export function AboutDropDown({ dark }) {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className={`text-lg ${!dark ? "text-black" : ""}  md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px]   font-semibold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > About</Button>
      </MenuHandler>
      <MenuList className="flex flex-col gap-3">
        <Link to="/about">About Gutzfit</Link>
        <Link to="/newsletter">Join our newsletter</Link>
      </MenuList>
    </Menu>
  );
}
export function AboutMobileDropDown() {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className={`text-lg  md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px]  font-semibold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > About</Button>
      </MenuHandler>
      <MenuList className="flex flex-col gap-3">
        <Link to="/about">About Gutzfit</Link>
        <Link to="/newsletter">Join our newsletter</Link>
      </MenuList>
    </Menu>
  );
}

export function TrainingDropDown({ dark }) {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className={`text-lg ${!dark ? "text-black" : ""} md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px]  font-semibold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > Training Programs</Button>
      </MenuHandler>
      <MenuList className="flex flex-col gap-3">
        <Link to="/training-programs/a9dB12fXcH7J3gT6L9Q4">Gutzfit Muscle Blast</Link>
        <Link to="/training-programs/z4Xy8VwN2Pq7H1R5m6K9">Gutzfit Tone Up</Link>
        <Link to="/training-programs/t6Yk3Pz2bF5D8Jw1V4H7">Gutzfit METCON</Link>
        <Link to="/training-programs/m9R1Xv5L4Kc2Y7N8W3J0">Gutzfit Shred</Link>
        <Link to="/training-programs/u7B3L2Qw5T9F6H1X4P8K">Gutzfit Outdoor Beast</Link>

      </MenuList>
    </Menu>
  );
}
export function TrainingMobileDropDown({ dark }) {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className={`text-lg md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px]  font-semibold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > Training Programs</Button>
      </MenuHandler>
      <MenuList className="flex flex-col gap-3">
        <Link to="/training-programs/a9dB12fXcH7J3gT6L9Q4" className="hover:!border-none">Gutzfit Muscle Blast</Link>
        <Link to="/training-programs/z4Xy8VwN2Pq7H1R5m6K9">Gutzfit Tone Up</Link>
        <Link to="/training-programs/t6Yk3Pz2bF5D8Jw1V4H7">Gutzfit METCON</Link>
        <Link to="/training-programs/m9R1Xv5L4Kc2Y7N8W3J0">Gutzfit Shred</Link>
        <Link to="/training-programs/u7B3L2Qw5T9F6H1X4P8K">Gutzfit Outdoor Beast</Link>
      </MenuList>
    </Menu>
  );
}
export function FollowMeDropDown({ dark }) {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className={`text-lg ${!dark ? "text-black" : ""} md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px]  font-semibold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > Follow Me</Button>
      </MenuHandler>
      <MenuList className="flex flex-col gap-3">
        <Link to="https://www.instagram.com/gutzfit?igsh=MWUzMGV0Z3lidnhkdA%3D%3D&utm_source=qr">Instagram</Link >
        <Link to="https://www.tiktok.com/@gutzfit0?_t=8qD42GWaOci&_r=1">TikTok</Link >
        <Link to="https://www.youtube.com/@Gutzfit">Youtube</Link >

      </MenuList>
    </Menu>
  );
}
export function FollowMeMobileDropDown({ dark }) {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className={`text-lg md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px] hover:text-green-600 font-semibold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > Follow Me</Button>
      </MenuHandler>
      <MenuList className="flex flex-col gap-3">
        <Link to="https://www.instagram.com/gutzfit?igsh=MWUzMGV0Z3lidnhkdA%3D%3D&utm_source=qr">Instagram</Link >
        <Link to="https://www.tiktok.com/@gutzfit0?_t=8qD42GWaOci&_r=1">TikTok</Link >
        <Link to="https://www.youtube.com/@Gutzfit">Youtube</Link >

      </MenuList>
    </Menu>
  );
}
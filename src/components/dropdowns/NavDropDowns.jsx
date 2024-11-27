/* eslint-disable react/prop-types */
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  
  Input,
  Checkbox,
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
        <Button className={`text-lg ${!dark ? "text-black" : ""}  md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px] font-nunito   font-bold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > About</Button>
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
        <Button className={`text-lg  md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px] font-nunito  font-bold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > About</Button>
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
        <Button className={`text-lg ${!dark ? "text-black" : ""} md:text-xl lg:text-[25px] font-nunito xl:text-4xl xxl:text-[60px]  font-bold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > Training Programs</Button>
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
        <Button className={`text-lg md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px] font-nunito  font-bold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > Training Programs</Button>
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
        <Button className={`text-lg ${!dark ? "text-black" : ""} md:text-xl lg:text-[25px] font-nunito xl:text-4xl xxl:text-[60px]  font-bold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > Follow Me</Button>
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
        <Button className={`text-lg md:text-xl lg:text-[25px] xl:text-4xl xxl:text-[60px]  font-nunito font-bold  transition duration-300  border-none p-0 bg-transparent shadow-none`} > Follow Me</Button>
      </MenuHandler>
      <MenuList className="flex flex-col gap-3">
        <Link to="https://www.instagram.com/gutzfit?igsh=MWUzMGV0Z3lidnhkdA%3D%3D&utm_source=qr">Instagram</Link >
        <Link to="https://www.tiktok.com/@gutzfit0?_t=8qD42GWaOci&_r=1">TikTok</Link >
        <Link to="https://www.youtube.com/@Gutzfit">Youtube</Link >

      </MenuList>
    </Menu>
  );
}

//popups modal
export function SignUpModal({ open, handleOpen }) {
 
  return (
    <>
      
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" className="bg-black" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
import { Typography } from "@material-tailwind/react";
import logo from '../assets/White Gutzfit logo WP.png'
import FadeInSection from "./FadeInSection";

const Footer = () => {
    return (
        <>
            <FadeInSection>
                <footer className="w-full bg-transparent p-8">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-center md:justify-between">
                        <div className="flex gap-3 items-center">
                            <img src={logo} alt="logo-ct" className="w-10" />
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className=" font-extrabold text-[40px] !text-white transition-colors uppercase hover:text-green-500 focus:text-green-500"
                            >
                                Guzfit
                            </Typography>
                        </div>
                    </div>
                    <div className="mt-0 flex w-full flex-col items-center justify-center  border-blue-gray-50 py-4 md:flex-row md:justify-between">
                        <div className="flex gap-8 text-blue-gray-900 sm:justify-center">
                            {/* Facebook */}
                            <Typography as="a" href="#" className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="md:text-[30px] text-[20px] text-white font-bold transition-transform hover:scale-105">Facebook</span>
                            </Typography>

                            {/* Instagram */}
                            <Typography as="a" href="#" className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="md:text-[30px] text-[20px] text-white font-bold transition-transform hover:scale-105">Instagram</span>
                            </Typography>

                            {/* YouTube */}
                            <Typography as="a" href="#" className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M21.8 8.001s-.195-1.376-.794-1.98c-.762-.8-1.617-.804-2.006-.85C16.307 5 12 5 12 5s-4.308 0-6.999.171c-.389.045-1.244.05-2.006.85-.6.604-.794 1.98-.794 1.98S2 9.621 2 11.241v1.528c0 1.62.195 3.24.195 3.24s.195 1.376.794 1.98c.762.8 1.762.775 2.208.86 1.604.154 6.803.169 6.803.169s4.308 0 7-.171c.389-.045 1.244-.05 2.006-.85.6-.604.794-1.98.794-1.98s.195-1.62.195-3.24v-1.528c0-1.62-.195-3.24-.195-3.24zM9.618 14.71v-5.42l5.336 2.71-5.336 2.71z" />
                                </svg>
                                <span className="md:text-[30px] text-[20px] text-white font-bold transition-transform hover:scale-105">YouTube</span>
                            </Typography>
                        </div>
                    </div>
                </footer>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-green-400 px-6 py-3">
                    <Typography color="blue-gray" className="font-semibold text-3xl text-white ">
                        &copy; 2024 GUZFIT | All rights reserved | Terms and Conditions | Privacy Policy
                    </Typography>
                </div>
            </FadeInSection>
        </>
    );
};

export default Footer
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
                                Gutzfit
                            </Typography>
                        </div>
                    </div>
                    <div className="mt-0 flex w-full flex-col items-center justify-center  border-blue-gray-50 py-4 md:flex-row md:justify-between">
                        <div className="flex gap-8 text-blue-gray-900 sm:justify-center">
                            {/* Facebook */}
                            <Typography as="a" href="https://www.tiktok.com/@gutzfit0?_t=8qD42GWaOci&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100">
                                <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <title>Tiktok</title>
                                    <g id="Icon/Social/tiktok-white" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" id="Fill-1" fill="#FFFFFF"></path>
                                    </g>
                                </svg>
                                <span className="md:text-[30px] text-[11px] sm:text-[20px] text-white font-bold transition-transform hover:scale-105">TikTok</span>
                            </Typography>


                            {/* Instagram */}
                            <Typography as="a" href="https://www.instagram.com/gutzfit?igsh=MWUzMGV0Z3lidnhkdA%3D%3D&utm_source=qr " target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="md:text-[30px] text-[11px]  sm:text-[20px]] text-white font-bold transition-transform hover:scale-105">Instagram</span>
                            </Typography>

                            {/* YouTube */}
                            <Typography as="a" href="https://www.youtube.com/@Gutzfit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M21.8 8.001s-.195-1.376-.794-1.98c-.762-.8-1.617-.804-2.006-.85C16.307 5 12 5 12 5s-4.308 0-6.999.171c-.389.045-1.244.05-2.006.85-.6.604-.794 1.98-.794 1.98S2 9.621 2 11.241v1.528c0 1.62.195 3.24.195 3.24s.195 1.376.794 1.98c.762.8 1.762.775 2.208.86 1.604.154 6.803.169 6.803.169s4.308 0 7-.171c.389-.045 1.244-.05 2.006-.85.6-.604.794-1.98.794-1.98s.195-1.62.195-3.24v-1.528c0-1.62-.195-3.24-.195-3.24zM9.618 14.71v-5.42l5.336 2.71-5.336 2.71z" />
                                </svg>
                                <span className="md:text-[30px] text-[11px]  sm:text-[20px] text-white font-bold transition-transform hover:scale-105">YouTube</span>
                            </Typography>
                        </div>
                    </div>
                </footer>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-primary-200 px-6 py-3">
                    <Typography color="blue-gray" className="font-semibold text-3xl text-blue ">
                        &copy; 2024 GUTZFIT | All rights reserved | Terms and Conditions | Privacy Policy
                    </Typography>
                </div>
            </FadeInSection>
        </>
    );
};

export default Footer

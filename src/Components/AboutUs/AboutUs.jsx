import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="mt-5 work-sans space-y-10">
            <div className="bg-gray-100 rounded-2xl text-center">
                <h1 className="text-3xl font-bold work-sans p-7">About Us</h1>
            </div>
            <section className="border p-5 rounded-xl space-y-3">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p>At Book Vibe, our mission is to connect readers with their next great read, providing a diverse selection of books for all ages and interests. We strive to create an engaging and user-friendly platform that fosters a love for reading and lifelong learning.</p>
                <p>By offering a curated collection of books, exceptional customer service, and a seamless shopping experience, we aim to inspire, educate, and entertain our customers while promoting literacy and a passion for literature.</p>
            </section>
            <section className="border p-5 rounded-xl space-y-3">
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p>Our vision at Book Vibe is to become the premier destination for book lovers worldwide. We envision a future where everyone has access to quality literature, where reading is celebrated as a fundamental aspect of personal growth and cultural enrichment.</p>
                <p>Through innovation, collaboration, and a dedication to customer satisfaction, we aim to continually expand our reach, enhance our services, and enrich the lives of readers everywhere.</p>
            </section>
            <section className="">
                <h2 className="text-xl font-bold text-center mb-5">Connect with us</h2>
                <div className="flex text-3xl gap-5 justify-center">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaWhatsapp />
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
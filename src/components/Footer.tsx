
function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4 text-center">About Us</h2>
                    <p className="mb-4 text-center">
                        Harmonia Academy is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.
                    </p>
                </div>
                <div>
                    <h2 className=" text-center text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="text-center">
                        <li>
                            <a
                                href="#"
                                className=" text-center hover:text-white transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className=" text-center hover:text-white transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/courses"
                                className=" text-center hover:text-white transition-colors duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className=" text-center hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className=" text-center text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex md:flex-row text-center flex-col space-x-4">
                        <a
                            href="#"
                            className=" text-center hover:text-white transition-colors duration-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className=" text-center hover:text-white transition-colors duration-300"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className=" text-center hover:text-white transition-colors duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className=" text-center text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="text-center">Bengaluru, India</p>
                    <p className="text-center">Bengaluru 560000</p>
                    <p className="text-center">Email: info@harmonia-academy.com</p>
                    <p className="text-center">Phone: (123) 456-7890</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© Vignesh N. All rights reserved.</p>
        </footer>
    )
}

export default Footer
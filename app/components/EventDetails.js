import { FaCalendarAlt, FaClock, FaLocationArrow, FaUserTie } from "react-icons/fa"; // Event-related icons
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function EventDetails() {
    return (
        <section className="max-w-3xl mx-auto my-8 px-4">
            {/* Event Title */}
            <h3 className="text-3xl font-bold text-yellow-300 mb-4">🎉 Campus Code Dev Fest 2025 🎉</h3>

            {/* About the Event Section */}
            <div className="text-gray-700 mb-6">
                <p>
                    The Campus Code Dev Fest is a unique opportunity for students to enhance their coding and problem-solving skills. Whether you're preparing for interviews or just passionate about development, this event will help you level up your knowledge in software engineering.
                </p>
                <p className="mt-4">
                    Join us for an interactive day filled with workshops, panel discussions, and hands-on sessions. Meet top engineers, participate in coding challenges, and connect with like-minded peers from various colleges.
                </p>
            </div>

            {/* Session Highlights */}
            <div className="mb-6">
                <h4 className="text-2xl font-semibold text-yellow-300 mb-2">🔍 Session Highlights:</h4>
                <ul className="list-disc list-inside pl-5">
                    <li><strong>Live Coding Challenges</strong>: Participate in real-time coding challenges designed to push your problem-solving abilities.</li>
                    <li><strong>Career Panel</strong>: Learn about the latest trends in tech, interview strategies, and career-building advice from industry experts.</li>
                    <li><strong>Networking Opportunities</strong>: Meet engineers, hiring managers, and recruiters from top tech companies.</li>
                </ul>
            </div>

            {/* Event Details */}
            <div className="mb-6">
                <h4 className="text-2xl font-semibold text-yellow-300 mb-2">📅 Event Details:</h4>
                <ul className="list-none">
                    <li className="flex items-center mb-2"><FaCalendarAlt className="text-blue-500 mr-2" /><strong>Date:</strong> May 10, 2025</li>
                    <li className="flex items-center mb-2"><FaClock className="text-blue-500 mr-2" /><strong>Time:</strong> 10:00 AM - 5:00 PM IST</li>
                    <li className="flex items-center mb-2"><FaLocationArrow className="text-blue-500 mr-2" /><strong>Location:</strong> Online (Zoom)</li>
                    <li className="flex items-center mb-2"><FaUserTie className="text-blue-500 mr-2" /><strong>Speaker:</strong> Shruti Jain, Senior Engineer at SoarX</li>
                </ul>
            </div>

            {/* Who Should Attend */}
            <div className="mb-6">
                <h4 className="text-2xl font-semibold text-yellow-300 mb-2">👥 Who Should Attend:</h4>
                <ul className="list-disc list-inside pl-5">
                    <li>Students looking to improve their coding skills</li>
                    <li>Tech enthusiasts who want to meet industry professionals</li>
                    <li>Anyone interested in cracking tech interviews and securing internships</li>
                </ul>
            </div>

            {/* Connect with Us Section */}
            <div className="mb-6">
                <h4 className="text-2xl font-semibold text-yellow-300 mb-2">🌐 Connect with Us:</h4>
                <ul className="flex space-x-6">
                    <li>
                        <a href="https://x.com/SoarXNetwork" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/campuscode?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 text-2xl">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/campuscodein/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>


            {/* Call to Action */}
            <div className="text-center">
                <p className="text-lg font-semibold text-yellow-900">
                    🌟 Don't miss this incredible opportunity to learn, network, and grow as a developer. Register now and take your career to the next level! 🌟
                </p>
            </div>
        </section>
    );
}

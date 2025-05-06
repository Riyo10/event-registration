import { useRouter } from 'next/router';

export default function WelcomeCard() {
    const router = useRouter();

    const handleRegisterClick = () => {
        // Navigate to the registration form page (you can adjust the path if needed)
        router.push('#registration-form'); // This can be replaced with the path of your registration page or scroll to the form
    };

    return (
        <section className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg text-center">
            {/* Welcome Caption */}
            <h2 className="text-3xl font-bold text-teal-500 mb-4">
                Welcome to Campus Code Dev Fest!
            </h2>

            {/* Description */}
            <p className="text-gray-700 mb-6">
                Join us for an exciting event where you'll learn from industry experts, engage in hands-on coding challenges, and network with top engineers.
            </p>

            {/* Registration Button */}
            <button
                onClick={handleRegisterClick}
                className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
            >
                Register Now
            </button>
        </section>
    );
}

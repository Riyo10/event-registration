import { FaBullhorn, FaUsers, FaCalendarAlt } from "react-icons/fa";  // Using event-relevant icons

export default function EventDescription() {
  return (
    <section className="max-w-3xl mx-auto text-center my-8 px-4">
      {/* Event Description */}
      <p className="text-gray-600 mb-6">
        Join us for the Campus Code Dev Fest! A hands-on workshop to help you crack software engineering interviews, master coding challenges, and interact with industry experts.
      </p>

      {/* Event Details: Host, Date, and Icons */}
      <div className="flex justify-center items-center space-x-8 mb-6">
        {/* Hosted by */}
        <div className="flex items-center space-x-2">
          <FaBullhorn className="text-blue-500 text-xl" /> {/* Icon for announcement */}
          <span className="font-semibold">Hosted by Campus Code</span>
        </div>

        {/* Date */}
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-blue-500 text-xl" /> {/* Calendar Icon */}
          <span className="font-semibold">Date: May 10, 2025</span>
        </div>

        {/* Participants */}
        <div className="flex items-center space-x-2">
          <FaUsers className="text-blue-500 text-xl" /> {/* Icon for participants */}
          <span className="font-semibold">Join 500+ coders</span>
        </div>
      </div>
    </section>
  );
}

import EventPoster from "./components/EventPoster";
import EventDescription from "./components/EventDescription";
import EventDetails from "./components/EventDetails";
import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <EventPoster />
      <EventDescription />
      <RegistrationForm />
      <EventDetails />
    </div>
  );
}

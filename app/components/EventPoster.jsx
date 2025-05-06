import Image from 'next/image';

export default function EventPoster() {
  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <Image
        src="/eventposter.jpg"  // Use the correct path to the image
        alt="Event Poster"
        width={600}  // Set the width you want
        height={400} // Set the height you want
        className="w-full rounded-lg shadow-md"
      />
    </div>
  );
}

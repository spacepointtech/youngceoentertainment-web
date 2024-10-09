import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      {/* Logo */}
      <div className="absolute top-10">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </div>

      {/* Main Content */}
      <div className="text-center mt-10">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">
          The Rhythm is Loading… Our Website is Dropping Soon!
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-600 mb-4">
          Young CEO Entertainment is where artists rise & music vibes.
        </p>

        {/* Emoji */}
        <div className="text-6xl mt-16 my-8" style={{ fontSize: '6rem' }}>🤯</div>

        <p className="text-2xl font-semibold text-[#582B0E]">
          BIG things are coming your way!
        </p>

        <p className="text-sm text-center mr-60 mb-2 text-black-400 mt-14">
          Don&apos;t miss a beat—drop your email and stay tuned!
        </p>

        {/* Email Subscription Box */}
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-l-lg w-[500px] border border-gray-300 text-lg"
          />
          <button className="bg-[#582B0E] text-white p-4 rounded-r-lg text-lg">
            Subscribe
          </button>
        </div>
      </div>

      {/* Illustrations */}
      <div className="absolute bottom-0 left-0">
        <Image
          src="/left.png"
          alt="Violin illustration"
          width={460} 
          height={460}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/right.png"
          alt="Singing illustration"
          width={220} 
          height={220} 
        />
      </div>

      {/* Top-right Image */}
      <div className="absolute top-0 right-0 overflow-hidden" style={{ height: '70%', width: '500px' }}>
        <Image
          src="/art.png" 
          alt="Half visible image"
          width={500} 
          height={540} 
          objectFit="cover"
          objectPosition="bottom" 
        />
      </div>
    </div>
  );
}

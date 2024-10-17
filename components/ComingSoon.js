// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center">
//       {/* Logo */}
//       <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
//         <Image src="/logo.png" width={200} height={200} />
//       </div>

//       {/* Main Content */}
//       <div className="text-center mt-16 px-4 sm:px-0">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl font-bold mt-6">
//           The Rhythm is Loading… Our Website is Dropping Soon!
//         </h1>

//         {/* Subtitle */}
//         <p className="text-xl sm:text-2xl text-gray-600 mb-4">
//           Young CEO Entertainment is where artists rise & music vibes.
//         </p>

//         {/* Emoji */}
//         <div className="text-5xl sm:text-6xl mt-10 mb-8">🤯</div>

//         <p className="text-xl sm:text-2xl font-semibold text-[#582B0E]">
//           BIG things are coming your way!
//         </p>

//         <p className="text-xs sm:text-sm mt-14 text-black-400">
//           Don&apos;t miss a beat—drop your email and stay tuned!
//         </p>

//         {/* Email Subscription Box */}
//         <div className="flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-8">
//           <input
//             type="email"
//             placeholder="Email"
//             className="p-3 sm:p-4 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none w-full sm:w-[500px] border border-gray-300 text-lg mb-2 sm:mb-0"
//           />
//           <a
//             href="mailto:connectwithus@youngceoentertainment.com?subject=Get%20Details%20about%20distributing%20my%20track&body=Hello!%20I%20hope%20this%20email%20finds%20you%20well.%20I%20want%20to%20connect%20with%20the%20team%20to%20discuss%20about%20distributing%20my%20music."
//             className="bg-[#582B0E] text-white p-3 sm:p-4 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none text-lg cursor-pointer w-full sm:w-auto text-center"
//           >
//             Subscribe
//           </a>
//         </div>
//       </div>

//       {/* Illustrations */}
//       <div className="absolute bottom-0 left-0">
//         <Image src="/left.png"  width={287} height={287} />
//       </div>
//       <div className="absolute bottom-0 right-0">
//         <Image src="/right.png" width={137} height={137} />
//       </div>

//       {/* Top-right Image */}
//       <div className="absolute top-0 right-0 overflow-hidden hidden sm:block" style={{ height: '70%', width: '300px' }}>
//         <Image
//           src="/art.png"
         
//           width={300}
//           height={400}
//           objectFit="cover"
//           objectPosition="bottom"
//         />
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 sm:top-10">
        <Image src="/logo.png" width={180} height={180} className="sm:w-[200px] sm:h-[200px]" alt="Logo" />
      </div>

      {/* Main Content */}
      <div className="text-center mt-32 sm:mt-40 px-4 sm:px-0 max-w-3xl">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold mt-6">
          The Rhythm is Loading… Our Website is Dropping Soon!
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-gray-600 mt-4">
          Young CEO Entertainment is where artists rise & music vibes.
        </p>

        {/* Emoji */}
        <div className="text-4xl sm:text-6xl mt-10 mb-6">🤯</div>

        <p className="text-lg sm:text-2xl font-semibold text-[#582B0E]">
          BIG things are coming your way!
        </p>

        <p className="text-xs sm:text-sm mt-10 text-gray-500">
          Don&apos;t miss a beat—drop your email and stay tuned!
        </p>

        {/* Email Subscription Box */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6">
          <input
            type="email"
            placeholder="Email"
            className="p-3 sm:p-4 rounded-t-lg sm:rounded-l-lg w-full sm:w-[400px] border border-gray-300 text-lg mb-2 sm:mb-0"
          />
          <a
            href="mailto:connectwithus@youngceoentertainment.com?subject=Get%20Details%20about%20distributing%20my%20track&body=Hello!%20I%20hope%20this%20email%20finds%20you%20well.%20I%20want%20to%20connect%20with%20the%20team%20to%20discuss%20about%20distributing%20my%20music."
            className="bg-[#582B0E] text-white p-3 sm:p-4 rounded-b-lg sm:rounded-r-lg text-lg cursor-pointer w-full sm:w-auto text-center"
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* Left Illustration */}
      <div className="absolute bottom-0 left-0 hidden sm:block">
        <Image src="/left.png" width={287} height={287} alt="Left Illustration" />
      </div>

      {/* Right Illustration */}
      <div className="absolute bottom-0 right-0 hidden sm:block">
        <Image src="/right.png" width={137} height={137} alt="Right Illustration" />
      </div>

      {/* Top-right Image */}
      <div
        className="absolute top-0 right-0 hidden sm:block overflow-hidden"
        style={{ height: '70%', width: '300px' }}
      >
        <Image
          src="/art.png"
          width={300}
          height={400}
          objectFit="cover"
          objectPosition="bottom"
          alt="Art"
        />
      </div>
    </div>
  );
}

// import Image from 'next/image';
// import Navbar from '../components/Navbar';

// export default async function AboutUs() {
//   const res = await fetch('http://localhost:3000/api/aboutus', {
//     cache: 'no-store'
//   });

//   const { introImage, description, team } = await res.json();

//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen pt-24 pb-16 px-6 bg-[#121212] text-white">
//         <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">About Us</h1>

//         {/* Intro Image and Description */}
//         <div className="flex flex-col md:flex-row gap-8 px-50 py-4 items-center text-center">
//           <div className="mb-6">
//             <Image
//               src={introImage}
//               alt="Intro"
//               width={180}
//               height={180}
//               className="rounded-lg border-4 border-cyan-400"
//             />
//           </div>
//           <p className="max-w-2xl text-lg text-gray-300">{description}</p>
//         </div>

//         {/* Team Section */}
//         <h2 className="text-2xl font-semibold text-cyan-300 mt-16 mb-10 text-center">Our Team</h2>

//         <div className="space-y-12 flex flex-col items-center">
//           {team.map((member, index) => (
//             <div key={index} className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl max-w-3xl w-full">
//               {/* Member Image */}
//               <div className="w-36 h-36 relative flex-shrink-0 rounded-lg overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Name & Designation */}
//               <div className="text-center md:text-left w-full">
//                 <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
//                 <p className="text-cyan-400 break-words">{member.designation}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }


// --------------------------------------------------------------

// import Image from 'next/image';
// import Navbar from '../components/Navbar';

// export default async function AboutUs() {
//   const res = await fetch('http://localhost:3000/api/aboutus', {   
//     cache: 'no-store'
//   });

//   const { introImage, description, team } = await res.json();

//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen pt-24 pb-16 px-14 text-white">
//         <h1 className="text-4xl font-bold text-cyan-500 mb-14 text-center">About Us</h1>

//         {/* Intro Image and Description */}
//         <div className="flex flex-col md:flex-row items-center bg-gray-300 gap-10 max-w-8xl mx-auto mb-16 px-20">
//           <div className="md:w-[900px] h-[700px] relative overflow-hidden">
//             <div className="w-100 h-100 overflow-hidden">
//               <Image
//                 src={introImage}
//                 alt="Intro"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="w-full md:flex-1 pl-8 text-lg text-gray-900 dark:text-gray-300 text-justify leading-relaxed whitespace-pre-line break-words">
//             {description}
//           </div>
//         </div>

//         {/* Team Section */}
//         <h2 className="text-3xl font-semibold text-cyan-500 mt-16 mb-4 text-center">Our Team</h2>

//         <div className="space-y-6 flex flex-col bg-gray-300 p-10 items-center">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="flex flex-col shadow rounded bg-white md:flex-row items-center gap-8 p-6  max-w-4xl w-full"
//             >
//               {/* Member Image */}
//               <div className="w-1/3 relative flex-shrink-0 rounded-lg overflow-hidden">
//                 <img
//                   src={member.image}
//                   alt={member.name}
               
//                   className="w-full h-70 object-fill "
//                 />
//               </div>

//               {/* Name & Designation */}
//               <div className="items-left p-10 w-2/3">
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-1">{member.name}</h3>
//                 <p className=" text-lg text-cyan-500 break-words mb-1">{member.designation}</p>

//                 {member.email && (
//                   <a
//                     href={`mailto:${member.email}`}
//                     className="text-2sm text-green-800 dark:text-green-600 hover:underline break-words block"
//                   >
//                     {member.email}
//                   </a>
//                 )}

//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }




// ------------------------------------------



import Image from 'next/image';
import Navbar from '../components/Navbar';

export default async function AboutUs() {
  const aboutRes = await fetch('http://localhost:1337/api/aboutus?populate[image][fields][0]=url&populate[image][fields][1]=formats&fields[0]=description', 
  {
    cache: 'no-store',
  });

  const teamRes = await fetch('http://localhost:1337/api/pro-team-members?fields[0]=EmployeeName&fields[1]=Designation&fields[2]=Email&populate[Image][fields][0]=url&populate[Image][fields][1]=formats', 
  {
    cache: 'no-store',
  });

  const about = await aboutRes.json();
  const teamData = await teamRes.json();

  const description = about?.data?.description || '';
  const introImageUrl = about?.data?.image?.url
    ? `http://localhost:1337${about.data.image.url}`
    : '';

  const team = teamData.data.map((member) => ({
    name: member.EmployeeName,
    designation: member.Designation,
    email: member.Email,
    image: member.Image?.url ? `http://localhost:1337${member.Image.url}` : '',
  }));

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-500 pt-20 mb-8 text-center">About Us</h1>

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center bg-gray-300 gap-6 md:gap-10 mb-12 p-2 sm:p-8 md:p-6">
          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {introImageUrl && (
              <img
                src={introImageUrl}
                alt="Intro"
                className="object-cover"
              />
            )}
          </div>

          <div className="w-full md:w-1/2 text-base sm:text-lg text-gray-900 dark:text-gray-900 text-justify leading-relaxed whitespace-pre-line break-words">
            {description}
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-500 mt-14 mb-6 text-center">Our Team</h2>

        <div className="space-y-6 flex flex-col items-center px-2 sm:px-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-300 text-black shadow-md rounded-xl w-full max-w-4xl p-4 sm:p-6 gap-4 sm:gap-8"
            >
              <div className="w-full md:w-1/3 rounded-md overflow-hidden">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-90 object-cover rounded-md"
                  />
                )}
              </div>

              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-600 text-base sm:text-lg mb-1 break-words">{member.designation}</p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm sm:text-base text-green-800 hover:underline break-words block"
                  >
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

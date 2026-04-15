// import React from 'react';

// export default async function VisitorCounter() {
//   const res = await fetch(`http://localhost:3000/api/visitor`,{
//     method: 'POST',
//     cache: 'no-store',
//   });

//   const data = await res.json();
//   const count = data?.count ?? 0;

//   return (
//     <div className="fixed bottom-4 right-4 bg-[#111827] text-white px-4 py-2 rounded shadow-lg text-sm z-50">
//       Visitor No.: {count}
//     </div>
//   );
// }

// // process.env.REDIS_URL

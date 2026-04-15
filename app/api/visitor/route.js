// import { NextResponse } from 'next/server';
// // import Redis from 'ioredis';

// // const redis = new Redis(process.env.REDIS_URL);

// export async function POST() {
//   try {
//     // Redis disabled to fix Vercel deployment issues
//     // const updatedCount = await redis.incr('visitor_count');
//     const updatedCount = 1250; // Fallback static count

//     return NextResponse.json({ count: updatedCount });
//   }
//   catch (error) {
//     console.error('Visitor API Error:', error);
//     return NextResponse.json(
//       { count: 1250, error: 'Redis disabled' },
//       { status: 200 }
//     );
//   }
// }


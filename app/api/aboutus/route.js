import { NextResponse } from 'next/server';
// import Redis from 'ioredis';

// const redis = new Redis(process.env.REDIS_URL);

export async function GET() {
  try {
    // const data = await redis.get('aboutus');
    // const parsed = data ? JSON.parse(data) : {};
    const fallbackData = {
      title: "About Us",
      introImage: "/pratik image.jpg",
      description:
        "I am Pratik Kumar, an Application Developer and Machine Learning Engineer specializing in GenAI and RAG pipelines. This website showcases my professional journey, projects, and technical skills.",
      team: [
        {
          name: "Pratik Kumar",
          designation: "Full Stack AI Engineer",
          image: "/pratik image.jpg"
        }
      ]
    };
    return NextResponse.json(fallbackData);
  } catch (err) {
    console.error('AboutUs GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 200 });
  }
}

export async function POST(request) {
  try {
    // const body = await request.json();
    // await redis.set('aboutus', JSON.stringify(body));
    return NextResponse.json({ message: 'Updated successfully! (Mocked - Redis disabled)' });
  } catch (err) {
    console.error('Redis POST error:', err);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}


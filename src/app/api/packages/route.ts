import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const packages = [
      {
        id: 1,
        title: "Romantic Getaway",
        price: 500,
        discount: 10,
        itinerary: ["Day 1: Arrival", "Day 2: City Tour", "Day 3: Departure"],
      },
      {
        id: 2,
        title: "Adventure Trip",
        price: 700,
        discount: 15,
        itinerary: ["Day 1: Trekking", "Day 2: Rafting", "Day 3: Campfire"],
      },
    ];

    return NextResponse.json(packages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 });
  }
}

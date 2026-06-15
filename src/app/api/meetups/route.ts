import { getUpcomingMeetups } from "@/lib/luma";
import { NextResponse } from "next/server";

export async function GET() {
  const meetups = await getUpcomingMeetups(3);
  return NextResponse.json(meetups);
}

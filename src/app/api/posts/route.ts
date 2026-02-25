import { getLatestPosts } from "@/lib/substack";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getLatestPosts(3);
  return NextResponse.json(posts);
}

import { connectToMongoDB } from "@/lib/db"; // MongoDB connection file
import { NextRequest, NextResponse } from "next/server";
import { Genre } from "@/app/models/Genre";
connectToMongoDB();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type } = body;
    const genres = await Genre.find({ type });

    return NextResponse.json(genres, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching genres with count:", error);

    return NextResponse.json("Something Went Wrong.", {
      status: 500,
    });
  }
}

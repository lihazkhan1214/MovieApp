import { connectToMongoDB } from "@/lib/db"; // MongoDB connection file
import { Channel } from "@/app/models/Channel"; // Channel Model
import { NextRequest, NextResponse } from "next/server";
import { Movie } from "@/app/models/Movie";
import dayjs from "dayjs"; // For easier date handling
connectToMongoDB();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type } = body;

    // Get the date range for the last 7 days
    const lastWeekStart = dayjs().subtract(7, "days").startOf("day").toDate();
    const todayEnd = dayjs().endOf("day").toDate();

    const channels = await Channel.find();

    const channelsWithCount = await Promise.all(
      channels.map(async (channel) => {
        const airingCount = await Movie.countDocuments({
          type: type,
          channel: channel.name,
          createdAt: { $gte: lastWeekStart, $lte: todayEnd },
        });

        return {
          ...channel.toObject(),
          count: airingCount,
        };
      })
    );

    // Filter only those channels with count greater than 0
    const filteredChannels = channelsWithCount.filter(
      (channel) => channel.count > 0
    );

    return NextResponse.json(filteredChannels, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching Channels with count:", error);

    return NextResponse.json("Something Went Wrong.", {
      status: 500,
    });
  }
}

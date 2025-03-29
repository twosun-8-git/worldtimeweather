import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
      console.error("WEATHER_API_KEY is not defined in environment variables");
      return NextResponse.json(
        {
          message: "Server configuration error",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { timezone } = body;

    if (!timezone) {
      return NextResponse.json(
        {
          message: "Missing timezone parameter",
        },
        { status: 400 }
      );
    }

    const cityName = timezone.split("/").pop();

    if (!cityName) {
      return NextResponse.json(
        {
          message: "Invalid timezone format",
        },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
    );

    if (!response.ok) {
      throw new Error(
        `weatherapi.com responded with status: ${response.status}`
      );
    }

    const data = await response.json();

    return NextResponse.json({
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      timezone: data.location.tz_id,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      condition: data.current.condition.text,
      updated: data.current.last_updated,
    });
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      {
        message: "Weather API Error",
      },
      { status: 500 }
    );
  }
}

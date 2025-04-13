import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
      console.error("WEATHER_API_KEY is not defined.");
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

    const apiUrl = `https://api.weatherapi.com/v1/current.json`;
    const countryName = timezone.split("/")[0];
    const cityName = timezone.split("/")[1];

    if (!cityName) {
      return NextResponse.json(
        {
          message: "Invalid timezone format",
        },
        { status: 400 }
      );
    }

    const cityResponse = await fetch(`${apiUrl}?key=${apiKey}&q=${cityName}`);

    let data;
    if (!cityResponse.ok) {
      const countryResponse = await fetch(
        `${apiUrl}?key=${apiKey}&q=${countryName}`
      );

      if (!countryResponse.ok) {
        throw new Error(
          `weatherapi.com responded with status: ${countryResponse.status}`
        );
      }
      data = await countryResponse.json();
    } else {
      data = await cityResponse.json();
    }

    return NextResponse.json({
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      timezone: data.location.tz_id,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      condition: data.current.condition,
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

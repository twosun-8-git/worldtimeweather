import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=xxx&q=Tokyo&aqi=no`
    );

    if (!response.ok) {
      throw new Error(
        `weatherapi.com responded with status: ${response.status}`
      );
    }

    const data = await response.json();

    return NextResponse.json({
      c: data.temp_c,
      f: data.temp_f,
      condition: data.condition.text,
    });
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json({
      message: "weatherapi Error",
    });
  }
}

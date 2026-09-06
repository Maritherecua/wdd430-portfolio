import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ Hello: "Hello from the API!" });
}

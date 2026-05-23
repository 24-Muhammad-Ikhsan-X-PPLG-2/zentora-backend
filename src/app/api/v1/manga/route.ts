import { NextRequest, NextResponse } from "next/server";
import { getMangas } from "@/lib/mangadex";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const res = await getMangas(page);
  if (res.error) {
    return NextResponse.json({
      error: true,
    });
  }
  return NextResponse.json(res.response);
}

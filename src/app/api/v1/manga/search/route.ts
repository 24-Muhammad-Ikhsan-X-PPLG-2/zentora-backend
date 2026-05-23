import { search } from "@/lib/mangadex";
import { NextRequest, NextResponse } from "next/server";

const limit = 10;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || 1);
  const res = await search(q, page, limit);
  if (res.error) {
    return NextResponse.json({
      error: true,
    });
  }
  return NextResponse.json(res.response);
}

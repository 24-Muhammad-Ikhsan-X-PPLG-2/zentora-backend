import { getManga } from "@/lib/mangadex";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ manga_id: string }> },
) {
  const { manga_id } = await params;
  const res = await getManga(manga_id);
  if (res.error) {
    return NextResponse.json({
      error: true,
    });
  }
  return NextResponse.json(res.response);
}

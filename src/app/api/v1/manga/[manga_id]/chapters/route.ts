import { getChapters } from "@/lib/mangadex";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ manga_id: string }> },
) {
  const { manga_id } = await context.params;
  const res = await getChapters(manga_id);
  if (res.error) {
    return NextResponse.json({
      error: true,
      response: null,
    });
  }
  return NextResponse.json({
    error: false,
    response: res.response,
  });
}

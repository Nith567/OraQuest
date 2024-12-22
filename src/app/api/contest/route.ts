import { NextRequest, NextResponse } from "next/server";
import prismadb from "../../../../lib/db";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { theme, entryCost, scoreToWin, contractAddress } = body;
    const profile = await prismadb.chainQuest.create({
      data: {
        theme,
        entryCost,
        scoreToWin,
        contractAddress,
      },
    });
    console.log("bk profile register created ", profile);
    return NextResponse.json(profile.id);
  } catch (error) {
    console.log("so theadd     ", error);
    return new NextResponse("Internal error:   ", { status: 500 });
  }
}

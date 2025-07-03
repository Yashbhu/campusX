import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content, authorId } = body;
    if (!content || !authorId) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const post = await prisma.post.create({
      data: {
        content,
        imageUrl: null,  // abhi ke liye image skip kar rahe hain
        authorId:'cmcmhw6rw0000fgi0oiligt96',
      },
    });

    return NextResponse.json({ message: "Post created", post }, { status: 201 });
  } catch (error) {
    console.error("Post creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: true }, // user details bhi la rahe hain
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

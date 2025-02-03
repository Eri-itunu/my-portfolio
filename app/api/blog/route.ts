import { NextResponse } from "next/server";
import { createClient } from "contentful";

export async function GET() {
    try {
        const client = createClient({
            accessToken: process.env.CONTENTFUL_API_KEY!,
            space: process.env.CONTENTFUL_SPACE_ID!,
        });

        const response = await client.getEntries({ content_type: "blogPost" });
        console.log(response.items)

        return NextResponse.json({ posts: response.items });
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
    }
}

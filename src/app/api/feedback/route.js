import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import FeedbackModel from "@/models/Feedback";

export async function POST(req) {
    const body = await req.json();
    try {
        await connectDB();
        const result = await FeedbackModel.create(body);
        console.log("result: ", result)

        return NextResponse.json({ "result": result }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "msg": "API: post mathod fail" }, { status: 400 })
    }
}
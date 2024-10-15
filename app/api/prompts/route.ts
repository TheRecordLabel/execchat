import { AI_MODEL } from "@/lib/consts";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function GET(req: NextRequest) {
  const answer = req.nextUrl.searchParams.get("answer");

  try {
    const openai = new OpenAI();

    const response = await openai.chat.completions.create({
      model: AI_MODEL,
      messages: [
        {
          role: "user",
          content: `Based on answer, you should offer logical follow-up questions.
          Questions should be in the form of a request for you to help us with our work..

          For example, the question should be formatted as follows:
          What is your budget for promotional activities? - Wrong.
          What budget do you recommend for promotional activities? - Correct.
            Answer:
              ${answer}
          `,
        },
        {
          role: "system",
          content: `Let's get response with only this json format. {"data": [string]}`,
        },
      ],
    });

    const questions = response.choices[0].message!.content!.toString();
    return Response.json({
      message: "success",
      questions: JSON.parse(questions).data,
    });
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : "failed";
    return Response.json({ message }, { status: 400 });
  }
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

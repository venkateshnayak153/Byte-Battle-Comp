import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { leadData } = await request.json()

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: `You are an AI lead scoring expert for service businesses. 
      Analyze the provided lead information and return a score from 0-100 based on:
      - Urgency of the request (higher urgency = higher score)
      - Budget range (higher budget = higher score)  
      - Detail level in description (more detail = higher score)
      - Location proximity (closer = higher score)
      - Service type demand (high-demand services = higher score)
      
      Return only a JSON object with: {"score": number, "reasoning": "brief explanation"}`,
      prompt: `Analyze this lead:
      Service: ${leadData.service}
      Description: ${leadData.description}
      Urgency: ${leadData.urgency}
      Budget: ${leadData.budget}
      Location: ${leadData.location}`,
    })

    const result = JSON.parse(text)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Lead scoring error:", error)
    return NextResponse.json({ error: "Failed to score lead" }, { status: 500 })
  }
}

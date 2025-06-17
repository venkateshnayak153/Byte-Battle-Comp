import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { leadData, providerInfo } = await request.json()

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: `You are an AI assistant helping service providers craft personalized responses to customer leads. 
      Create a professional, friendly response that:
      - Acknowledges the customer's specific needs
      - Highlights relevant experience/expertise
      - Provides next steps (consultation, quote, etc.)
      - Maintains a professional but approachable tone
      - Is concise but informative`,
      prompt: `Create a response for this lead:
      
      Customer Request:
      Service: ${leadData.service}
      Description: ${leadData.description}
      Urgency: ${leadData.urgency}
      Budget: ${leadData.budget}
      
      Provider Info:
      Business: ${providerInfo.businessName}
      Service Type: ${providerInfo.serviceType}
      Experience: ${providerInfo.experience || "5+ years"}
      
      Generate a personalized response message.`,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Response generation error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}

import { GoogleGenerativeAI } from "@google/generative-ai";
import { personas } from "../prompts.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        const { message, persona } = req.body;

        console.log("Incoming:", message, persona);

        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash"
        });

        const prompt = personas[persona]?.prompt;

        if (!prompt) {
            return res.status(400).json({ error: "Invalid persona" });
        }

        const result = await model.generateContent(
            prompt + "\nUser: " + message
        );

        console.log("RAW RESULT:", JSON.stringify(result, null, 2));

        let reply = "No response";

        try {
            reply = result.response.text();
        } catch (e) {
            console.log("text() failed, trying fallback...");
            reply =
                result?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "Still no response";
        }

        console.log("FINAL REPLY:", reply);

        return res.status(200).json({ reply });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: "Server error" });
    }
}
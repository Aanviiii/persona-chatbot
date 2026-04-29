import { GoogleGenerativeAI } from "@google/generative-ai";
import { personas } from "../prompts.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        const { message, persona } = req.body;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });

        const prompt = personas[persona].prompt;

        const result = await model.generateContent([
            prompt,
            `User: ${message}`
        ]);

        const reply = result.response.text();

        res.status(200).json({ reply });

    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
}
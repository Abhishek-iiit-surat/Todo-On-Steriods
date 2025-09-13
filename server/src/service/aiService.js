const {logger} = require('../middlewares/logger');
const axios = require('axios');

const ai_title = async (content) => {
    systemPrompt = `You are an expert title generator. Your job is to take a task description and produce a single title that is:
    - Catchy: grabs attention immediately.
    - Concise: as short as possible while keeping the meaning clear.
    - Highly Informative: conveys exactly what the task is about, with no ambiguity.
    - Professional yet Engaging: suitable for use in project trackers, articles, or presentations.
    Only return the final title—do not include explanations or extra text.`;

    messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: content }
    ]
    const api_url = process.env.METALLAMA_API_URL;
    const api_key_value = process.env.METALLAMA_API_KEY;
    const headers = {
        "Content-Type": "application/json",
        [api_key_value]: "apikey"
    }
    const json_body = {
        "model": "meta-llama/Meta-Llama-3-8B-Instruct",
        "messages": messages,
        "max_tokens": 2048,
        "temperature": 0.9,
        "repetition_penalty": 1.1,
        "top_k": 10,
        "top_p": 0.9
    };

    try {
        const response = await axios.post(api_url, json_body, { headers });
        // const responseData = response;
        if (response["data"]["answer"]) {
            return response["data"]["answer"];
        }
        else {
            return "";
        }
    }
    catch (error) {
        logger.log('error in ai title generation', { message: error.message });
        return "";
    }
}

const ai_category_risk = async (content) => {
    systemPrompt = `You are an expert task evaluator. Your job is to analyze the given task description and respond ONLY in valid JSON with the following fields:
    - "category": A single label that best classifies the task. Possible examples include: "work", "personal", "finance", "health", "education", "shopping", "travel", "other". Pick the most suitable one based on the task description.
    - "isHighRisk": true if the task involves significant financial impact, legal/ethical concerns, safety risks, or critical deadlines. Otherwise, false.
    - "description": the improved version of the task description.
    Return only the JSON object, no explanations or extra text.
    `;
    messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: content }
    ]
    const api_url = process.env.METALLAMA_API_URL;
    const api_key_value = process.env.METALLAMA_API_KEY;
    const headers = {
        "Content-Type": "application/json",
        [api_key_value]: "apikey"
    }
    const json_body = {
        "model": "meta-llama/Meta-Llama-3-8B-Instruct",
        "messages": messages,
        "max_tokens": 5000,
        "temperature": 0.9,
        "repetition_penalty": 1.1,
        "top_k": 10,
        "top_p": 0.9
    };

    try {
        const response = await axios.post(api_url, json_body, { headers });
        if (response["data"]["answer"]) {
            return JSON.parse(response["data"]["answer"]);
        }
        else {
            return { category: "other", isHighRisk: false, description: content };
        }
    }
    catch (error) {
        logger.log('error in ai category and rist evaluation', { message: error.message });
        return { category: "other", isHighRisk: false ,  description: content };
    }
}

module.exports = { ai_title, ai_category_risk };
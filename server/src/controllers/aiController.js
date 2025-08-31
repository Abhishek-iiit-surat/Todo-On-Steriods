const aiService = require('../service/aiService');

const askAi = async (req, res) => {
    try {
        const { question } = req.body;
        const response = await aiService.getAiResponse(question);
        res.status(200).json({ answer: response });
    } catch (error) {
        res.status(500).json({ message: "AI service is currently unavailable. Please try again later." });
    }
}

module.exports = { askAi }
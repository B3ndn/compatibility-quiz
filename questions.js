const questions = [
    {
        text: "How do you view love?",
        options: [
            { text: "A neurochemical response to environmental stimuli that should be analyzed systematically", score: 10, explanation: "Aligned analytical view" },
            { text: "A mix of chemistry and emotion that can be understood rationally", score: 7, explanation: "Compatible perspective" },
            { text: "A magical connection between souls", score: 0, explanation: "Mismatched worldview" }
        ]
    },
    {
        text: "When making life decisions, what's your approach?",
        options: [
            { text: "Create clear metrics and systematically optimize for them", score: 10, explanation: "Perfect systematic match" },
            { text: "Balance data and intuition", score: 5, explanation: "Compatible approach" },
            { text: "Follow my heart", score: 0, explanation: "Different decision styles" }
        ]
    },
    {
        text: {
            type: "meme",
            url: "/api/placeholder/400/400", // We'd need a meme about optimization/spreadsheets
            caption: "Reaction to this meme about optimizing relationships with spreadsheets:"
        },
        options: [
            { text: "Finally, someone gets it!", score: 10, explanation: "Aligned humor" },
            { text: "Uhh... no.", score: 0, explanation: "Different wavelength" }
        ]
    },
    {
        type: "freeform",
        text: "What do you optimize for in life and why?",
        aiScoring: true
    },
    {
        text: "How do you handle strong emotions?",
        options: [
            { text: "Analyze them systematically and maintain control", score: 10, explanation: "Perfect emotional approach" },
            { text: "Feel them but try to stay rational", score: 7, explanation: "Compatible style" },
            { text: "Express them freely", score: 0, explanation: "Different emotional control" }
        ]
    },
    {
        text: "Views on travel and lifestyle changes:",
        options: [
            { text: "Excited about frequent travel and rapid adaptation", score: 10, explanation: "Perfect lifestyle match" },
            { text: "Open to change but prefer some stability", score: 5, explanation: "Workable approach" },
            { text: "Prefer consistent routine", score: 0, explanation: "Different lifestyle needs" }
        ]
    },
    {
        text: "Would you be willing to become plant-based/vegan?",
        options: [
            { text: "Already am / Absolutely", score: 10, explanation: "Aligned values" },
            { text: "Open to considering it", score: 7, explanation: "Compatible mindset" },
            { text: "Probably not", score: 0, explanation: "Different values" }
        ]
    },
    {
        type: "freeform",
        text: "What's your most contrarian view about the future of humanity?",
        aiScoring: true
    }
];

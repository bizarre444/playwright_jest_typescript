module.exports = {
    preset: "jest-playwright-preset",
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    },
    testTimeout: 30000,
    testEnvironmentOptions: {
        "jest-playwright": {
            browsers: ["chromium"
                //, "firefox", "edge"
            ],
            launchOptions: {
                headless: false,
                //slowMo: 600,
            }
        }
    },
    reporters: [
        "default", [
            "jest-html-reporters",
            {
                "publicPath": "./reports/html-report",
                "filename": "report.html",
                "openReport": true
            }
        ]
    ]
};
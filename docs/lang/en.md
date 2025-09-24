# X-Bot

[日本語](../../README.md) | English

This project is managed with **Google Apps Script (GAS)** using [clasp](https://github.com/google/clasp).

## Requirements

- Node.js (v16 or higher recommended)
- npm or pnpm
- [clasp CLI](https://github.com/google/clasp)
- Google Account

## Setup Steps

1. **Clone the repository**

   ```bash
   git clone <repository URL>
   cd X-Bot
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or pnpm install
   ```

3. **Install clasp (if not already installed)**

   ```bash
   npm install -g @google/clasp
   ```

4. **Log in with your Google account**

   ```bash
   clasp login
   ```

   - A browser will open, authenticate with the Google account you want to use
   - Credentials will be saved in `~/.clasprc.json`

5. **Create a GAS project**

   - Go to [Google Apps Script](https://script.google.com/) and create a “New Project”
   - From the menu, go to **“Project Settings”** → copy the “Script ID”

6. **Link the GAS project locally**

   ```bash
   clasp clone <copied Script ID>
   ```

   - `.clasp.json` will be generated
   - After this, local and GAS projects can be synchronized

7. **Synchronize files**

   - GAS → Local

     ```bash
     clasp pull
     ```

   - Local → GAS

     ```bash
     clasp push
     ```

8. **Set Script Properties**

   * Create the following from X’s Developer Portal

     * [Setup Guide](https://qiita.com/neru-dev/items/857cc27fd69411496388)

        ```
        # Access Token  
        TWITTER_ACCESS_TOKEN  
        # Access Token Secret  
        TWITTER_ACCESS_TOKEN_SECRET  
        # API Key  
        TWITTER_API_KEY  
        # API Secret  
        TWITTER_API_SECRET  
        ```
   * Generate an API key from OpenAI

     ```
     # OpenAI API  
     OPEN_AI_API  
     ```
   * Example <img src="../images/setup1.png" />

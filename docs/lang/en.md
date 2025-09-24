# X-Bot

[日本語](../../README.md) | English

This project is managed with **Google Apps Script (GAS)** using [clasp](https://github.com/google/clasp).

Here’s the English translation:

---

## Feature Overview

The following features enable scheduled posting by using GAS triggers.

### Feature 1: Generate short strange stories and post them on X

Run the `batchPostStrangeStory` function to post AI-generated strange stories to X along with hashtags.

Example:

```
古びた屋敷の廊下を歩くと、壁の絵から見知らぬ子供がこちらをじっと見つめていた。目を逸らし、再びその絵に視線を戻すと、その子供は二人に増えていた。不安になり走り出す僕の耳に、「一緒に遊ぼうよ」と悲しげな声が追いかける。屋敷から飛び出すと、足下には見慣れぬ足跡が並んでいた。翌朝、その屋敷は跡形もなく、ただ子供たちの笑い声が風に乗って、僕の背中を優しく押した。

#奇妙な話 #フィクション
```

### Feature 2: Generate nonexistent words or proverbs and post them on X

Run the `batchPostDontExistWords` function to post AI-generated nonexistent words or proverbs to X along with hashtags.

Example:

```
かびの餅が語る

■意味
時間を忘れて悠久の間放置された問題が、勝手に解決することを表すことわざです。

ある村に古くから祭られた餅がありましたが、その餅は忘れ去られ、長い年月でかびに覆われました。ある日、不思議な夢を見た村人がその餅を眺めに行くと、カビは神聖な模様となり、村の謎を解き明かす鍵となったのです。その現象に村人は驚き、時に問題も放っておけば勝手に解決することもあると感じました。

#フィクション
```

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

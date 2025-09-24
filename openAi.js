/**
 * OpenAI API を使ってテキストを生成する
 * @param {string} system システムに指示すること
 * @param {string} prompt 指示詳細
 */
function generateContent(system, prompt) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("OPEN_AI_API");
  if (!apiKey) {
    throw new Error("OPEN_AI_API が設定されていません");
  }

  // --- プロンプト定義 ---
  const messages = [
    {
      role: "system",
      content: system
    },
    {
      role: "user",
      content: prompt
    }
  ];

  // --- API 呼び出し ---
  const url = "https://api.openai.com/v1/chat/completions";
  const payload = {
    model: "gpt-4o",   // モデル指定
    messages: messages,
    max_tokens: 400,   // 300文字以内なので余裕を持たせて
    temperature: 1.2   // 少し創作寄りにする
  };

  const options = {
    method: "post",
    headers: {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  const result = JSON.parse(response.getContentText());

  // --- 結果を安全に取得 ---
  if (!result.choices || result.choices.length === 0) {
    throw new Error("APIから応答がありません: " + JSON.stringify(result));
  }

  const story = result.choices[0].message.content.trim();
  return story;
}

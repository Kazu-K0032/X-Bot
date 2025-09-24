/**
 * Xにポストする際のフォーマットを作成する関数
 * @param {string} document テキスト
 * @param {Array<string>} tags ハッシュタグ
 * @return {string} ポスト可能なフォーマット
 */
function postedFormat(document, tags) {
  // --- document が無効な場合 ---
  if (typeof document !== "string") {
    // 文字列でなければ空文字扱いにする
    document = "";
  }
  const trimmedDoc = document.trim();

  // --- tags が配列でなければ空配列にする ---
  if (!Array.isArray(tags)) {
    tags = [];
  }

  // --- ハッシュタグを整形 ---
  const formattedTags = tags.map(tag => {
    if (typeof tag !== "string") return "";
    return tag.startsWith("#") ? tag : `#${tag}`;
  }).filter(tag => tag !== ""); // 空文字は除外

  // --- 本文 + 改行 + ハッシュタグを連結 ---
  return formattedTags.length > 0
    ? `${trimmedDoc}\n\n${formattedTags.join(" ")}`
    : trimmedDoc;
}


# X-Bot

[English](./docs/lang/en.md) | 日本語

このプロジェクトは **Google Apps Script (GAS)** を[clasp](https://github.com/google/clasp)で管理している。  

## 必要環境

- Node.js（v16 以上推奨）  
- npm または pnpm  
- [clasp CLI](https://github.com/google/clasp)  
- Google アカウント  

## セットアップ手順

1. **リポジトリを取得**  

    ```bash
    git clone <リポジトリURL>
    cd X-Bot
    ```

2. **依存パッケージをインストール**

    ```bash
    npm install
    # または pnpm install
    ```

3. **claspをインストール（未導入なら）**

    ```bash
    npm install -g @google/clasp
    ```

4. **Googleアカウントでログイン**

    ```bash
    clasp login
    ```

    * ブラウザが開くので、使用したいGoogleアカウントで認証する
    * 認証情報は`~/.clasprc.json`に保存される

5. **GASプロジェクトを作成**

   * [Google Apps Script](https://script.google.com/) にアクセスし、「新しいプロジェクト」を作成する
   * メニューの **「プロジェクトの設定」** → 「Script ID」をコピーする

6. **GASプロジェクトをローカルに関連付け**

    ```bash
    clasp clone <コピーしたScript ID>
    ```

   * `.clasp.json`が生成される
   * 以降、ローカルとGASが同期可能になる

7. **ファイルを同期**

   * GAS → ローカル

       ```bash
       clasp pull
       ```

   * ローカル → GAS

       ```bash
       clasp push
       ```

8. **スクリプトプロパティの設定**
    * XのDeveloper Portalから以下を作成する
      * [作成手順](https://qiita.com/neru-dev/items/857cc27fd69411496388)
        ```
        # アクセストークン
        TWITTER_ACCESS_TOKEN
        # アクセストークンシークレット
        TWITTER_ACCESS_TOKEN_SECRET
        # APIキー
        TWITTER_API_KEY
        # APIシークレット
        TWITTER_API_SECRET
        ```
    * OpenAIからAPIを発行
        ```
        # OpenAIのAPI
        OPEN_AI_API
        ```
    * 完成例
        <img src="./docs/images/setup1.png" />

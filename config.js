/* ============================================================
   設定ファイル
   ここだけ書き換えれば動きます。
   ※ APIキーは絶対にこのファイルに書かないこと。
     このファイルは公開ページの一部で、誰でも中身を見られます。
     APIキーは Google Apps Script 側に置きます。
   ============================================================ */

window.APP_CONFIG = {
  // GASウェブアプリのURL（/exec で終わるもの）
  // 例: "https://script.google.com/macros/s/AKfycb.../exec"
  API_BASE: "https://script.google.com/macros/s/XXXXXXXXXXXX/exec",

  // GASのスクリプトプロパティ「APP_TOKEN」と同じ文字列。
  // 目隠し程度の役割なので、適当な英数字でよい。
  APP_TOKEN: "natsu2026school",

  // 教員コンソール（#teacher）に入るときの合言葉。
  // これも「目隠し」程度で、ページのソースを見れば読めてしまいます。
  // 生徒が本気で探せば見つかるレベルの防御だと理解して使ってください。
  TEACHER_PIN: "1234",
};

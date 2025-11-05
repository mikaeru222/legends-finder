// src/firebaseErrorMessages.ts
export const firebaseErrorToJa = (code: string) => {
  switch (code) {
    case "auth/invalid-email":
      return "メールアドレスの形式が正しくありません。";
    case "auth/user-disabled":
      return "このアカウントは無効になっています。";
    case "auth/user-not-found":
      return "このメールアドレスのユーザーが見つかりません。";
    case "auth/wrong-password":
      return "パスワードが正しくありません。";
    case "auth/too-many-requests":
      return "試行回数が多すぎます。しばらくしてからもう一度お試しください。";
    case "auth/network-request-failed":
      return "ネットワークエラーが発生しました。通信環境を確認してください。";
    case "auth/api-key-not-valid":
      return "Firebase の設定が正しくありません。（管理者に連絡してください）";
    default:
      return "ログインに失敗しました。もう一度お試しください。";
  }
};

import React, { useState } from "react";

// ユーザー情報の型定義
interface UserInfo {
  name: string;
  email: string;
  age: string;
  agreeToTerms: boolean;
}

export const FormProcessing = () => {
  // フォーム全体の状態をオブジェクトで管理
  const [formData, setFormData] = useState<UserInfo>({
    name: "",
    email: "",
    age: "",
    agreeToTerms: false,
  });
  // エラーメッセージ用のstate
  const [errors, setErrors] = useState<Partial<UserInfo>>({});
  // 送信成功メッセージ用のstate
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 入力変更を処理する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // チェックボックスとその他の入力で処理を分ける
    const inputValue = type === "checkbox" ? checked : value;

    //formDataを更新（特定のフィールドだけ）
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  // フォーム送信を処理する関数
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // デフォルトの送信動作を防止
    e.preventDefault();

    // バリデーション（入力チェック）
    const newErrors: Partial<UserInfo> = {};

    if (!formData.name.trim()) {
      newErrors.name = "名前は必須です";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスは必須です";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "メールアドレスの形式が正しくありません";
    }

    if (formData.age && isNaN(Number(formData.age))) {
      newErrors.age = "年齢は数値で入力してください";
    }

    if (!formData.agreeToTerms) {
      // newErrors.agreeToTerms = "利用規約に同意してください";
    }

    // エラーがある場合
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // 送信処理を中断
      return;
    }

    // エラーがない場合、送信処理
    console.log("送信データ", formData);

    // フォームをリセット
    setFormData({
      name: "",
      email: "",
      age: "",
      agreeToTerms: false,
    });

    // エラーをクリア
    setErrors({});

    // 送信成功メッセージを表示
    setIsSubmitted(true);

    // ３秒後にメッセージを非表示
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <h2>ユーザー登録フォーム</h2>

      {/* 送信成功メッセージ */}
      {isSubmitted && <div>フォームが正常に送信されました！</div>}

      <form onSubmit={handleSubmit}>
        {/* 名前フィールド */}
        <div>
          <label htmlFor="name">名前</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        {/* メールアドレスフィールド */}
        <div>
          <label htmlFor="">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        {/* 年齢フィールド */}
        <div>
          <label htmlFor="">年齢（任意）</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span>{errors.age}</span>}
        </div>

        {/* 利用規約同意チェックボックス */}
        <div>
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            利用規約に同意します
          </label>
          {errors.agreeToTerms && <span>{errors.agreeToTerms}</span>}
        </div>

        {/* 送信ボタン */}
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

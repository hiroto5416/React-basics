import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  name: string;
  email: string;
  agreeToTerms: boolean;
}

interface FormsError {
  name?: string;
  email?: string;
  agreeToTerms?: string;
}
export const FormProcessing2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserInfo>({
    name: "",
    email: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Partial<FormsError>>({});

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.targetの情報を取得
    const { name, value, type, checked } = e.target;

    // チェックボックスの場合はcheckedpプロフパティを使用、それ以外の場合はvalueプロパティを使用する
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");

    const newErrors: Partial<FormsError> = {};

    if (!formData.name.trim()) {
      newErrors.name = "名前は必須です";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスは必須です";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "メールアドレスの形式が正しくありません";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "利用規約に同意してください";
    }

    // エラーがある場合
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("送信データ", formData);

    // フォームリセット
    setFormData({
      name: "",
      email: "",
      agreeToTerms: false,
    });

    // エラーをクリア
    setErrors({});
  };

  return (
    <div>
      <button onClick={handleBack}>戻る</button>

      <h2>ユーザー登録フォーム2</h2>
      <form onSubmit={handleSubmit}>
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

        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="agreeToTerms">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            利用規約に同意します
          </label>
          {errors.agreeToTerms && <span>{errors.agreeToTerms}</span>}
        </div>

        <button type="submit">登録</button>
      </form>
    </div>
  );
};

import { spawn } from "child_process";
import { error } from "console";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  name: string;
  email: string;
  agreeToTerms: boolean;
}
export const FormProcessing2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserInfo>({
    name: "",
    email: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Partial<UserInfo>>({});

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.targetの情報を取得
    const {name, value, type, checked} = e.target

    
  };

  const handleSubmit = () => {};

  return (
    <div>
      <button onClick={handleBack}>戻る</button>

      <h2>ユーザー登録フォーム</h2>
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
          <label htmlFor="">
            <input type="checkbox" id="agreeToTerms" name="agreeToTerms" />
            利用規約に同意します
          </label>
        </div>

        <button type="submit">登録</button>
      </form>
    </div>
  );
};

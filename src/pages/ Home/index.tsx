import { Button } from "../../components/Button";
import { Button2 } from "../../components/Button2";
import ProfileCard from "../../components/ProfileCard";
import ProfileCard2 from "../../components/ProfileCard2";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("ボタンがクリックされました");
  };

  const handleClick2 = () => {
    alert("Button2がクリックされました");
  };

  const handleContact = () => {
    alert("問い合わせフォームへ移動します");
  };

  const handleTodo = () => {
    navigate("/Todo");
  };

  return (
    <div className="App">
      <h1>コンポーネント基礎</h1>
      <Button text="クリックしてください" onClick={handleClick} color="green" />
      <Button
        text="クリックしてください"
        onClick={() => alert("２つの目のボタンがクリックされました。")}
        color="purple"
      />
      <Button2 text="クリックしてください" onClick={handleClick2} color="red" />
      <br />
      <h1>Props</h1>
      <ProfileCard
        name="山田太郎"
        role="シニアフロントエンジニア開発者"
        company="テックカンパニー株式会社"
        bio="5年以上のReact開発経験を持つフロントエンド開発者です。パフォーマンス最適化とUI/UX設計が得意です。"
        avatarUrl="/yamada.jpg"
        socialLinks={{
          twitter: "https://x.com/yamada_taro",
          linkedin: "https://www.linkedin.com/in/taro-yamada/",
          github: "https://github.com/taroyamada",
        }}
        onContact={handleContact}
      />
      {/* 最小限のpropsだけでも使用可能 */}
      <ProfileCard
        name="佐藤花子"
        role="バックエンド開発者"
        onContact={() => alert("佐藤花子に問い合わせ")}
      />
      <ProfileCard2
        name="橘田大翔"
        age={20}
        gender="男性"
        address="東京都千代田区川田町800−2"
        telephoneNumber="090-1234-5678"
      />
      <button onClick={handleTodo}>Todoページへ</button>;
      <Link to="/Todo2" style={{display: 'block'}}>Todo2ページへ</Link>
    </div>
  );
}

interface ProfileCardProps {
  // 基本情報（必須）
  name: string;
  role: string;

  // 追加情報（オプション）
  company?: string;
  bio?: string;
  avatarUrl?: string;

  // ソーシャルメディアリンク（オプション）
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };

  // アクション
  onContact: () => void;
}

const ProfileCard = ({
  name,
  role,
  company,
  bio = "自己紹介はまだありません",
  avatarUrl = "/default-avatar.png",
  socialLinks = {},
  onContact,
}: ProfileCardProps) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={avatarUrl}
          alt={`${name}のプロフィール画像`}
          className="avatar"
        />
        <h2>{name}</h2>
        <p className="role">{role}</p>
        {company && <p className="company">{company}</p>}
      </div>

      <div className="profile-body">
        <p className="bio">{bio}</p>

        {/* ソーシャルリンクがあれば表示 */}
        {(socialLinks.twitter ||
          socialLinks.linkedin ||
          socialLinks.github) && (
          <div className="social-links">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            )}
          </div>
        )}
      </div>

      <button onClick={onContact} className="contact-button">
        問い合わせる
      </button>
    </div>
  );
};

export default ProfileCard;

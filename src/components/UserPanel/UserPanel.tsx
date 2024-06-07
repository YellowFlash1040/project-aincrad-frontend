import { LanguageIcon, UserIcon } from '../../assets';

import s from './UserPanel.module.css';

const UserPanel = () => {
  return (
    <>
      <button className={s.languageButton} type="button">
        <LanguageIcon width={28} height={28} />
      </button>
      <button className={s.userAvatarWrapper}>
        <UserIcon width={28} height={28} />
      </button>
    </>
  );
};

export default UserPanel;

import clsx from "clsx";
import css from './friendlistitem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={clsx(css.status, isOnline ? css.isOnline:css.isOffline) }></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

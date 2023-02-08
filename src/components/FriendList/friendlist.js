import { FriendListItem } from '../FriendListItem/friendlistitem';
import css from './friendlist.module.css';
import PropTypes from "prop-types";

export const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li className={css.item} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
      })
    ).isRequired
}
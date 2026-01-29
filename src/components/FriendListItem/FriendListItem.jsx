import { BiSolidCircle } from 'react-icons/bi';

import PropTypes from 'prop-types';
import css from '@/components/FriendListItem/FriendListItem.module.css';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  console.log(css[isOnline]);
  return (
    <li className={css.item}>
      <BiSolidCircle
        className={`${css.icon} ${isOnline ? css.online : css.offline}`}
      />
      {/* <span className={css.status}> {isOnline ? '🟢' : '🔴'} </span> */}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

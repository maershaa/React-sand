import PropTypes from 'prop-types';
import FriendListItem from '@/components/FriendListItem/FriendListItem';
import { Friends } from '@/components/FriendList/FriendList.styled.jsx';

const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </Friends>
  );
};

FriendList.PropTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;

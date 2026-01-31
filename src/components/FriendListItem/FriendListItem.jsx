import PropTypes from 'prop-types';
import { BiSolidCircle } from 'react-icons/bi';
import {
  ListItem,
  Avatar,
  UserName,
} from '@/components/FriendListItem/FriendListItem.styled.jsx';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  // console.log(css[isOnline]);
  return (
    <ListItem isOnline={isOnline}>
      <BiSolidCircle />
      <Avatar src={avatar} alt={`User ${name} avatar`} width="48" />
      <UserName>{name}</UserName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

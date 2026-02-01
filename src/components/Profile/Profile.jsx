import PropTypes from 'prop-types';

import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from '@/components/Profile/Profile.styled.jsx';

const Profile = props => {
  const {
    userName,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;

  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt={userName} />
        <Name>{userName}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    //shape — это способ описать структуру объекта в prop-types.stats: PropTypes.object значит что React не проверит есть ли followers, views и likes. потому лучше писать: PropTypes.shape({...})
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

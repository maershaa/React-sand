import PropTypes from 'prop-types';

const Profile = props => {
  const {
    userName,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={userName} className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
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

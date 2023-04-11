import PropTypes from 'prop-types';
import {ProfileItem, ProfileList, ProfileListItem, ProfileImg} from 'components/App/App.styled'

const User = ({avatar, username, tag, location, stats}) => {
    return ( 
    <div>
    <ProfileItem className="description">
      <ProfileImg
        src={avatar}
        alt="User avatar"
        className="avatar"
        width="70"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </ProfileItem>
    
    <ProfileList className="stats">
      <ProfileListItem>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </ProfileListItem>
      <ProfileListItem>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </ProfileListItem>
      <ProfileListItem>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </ProfileListItem>
    </ProfileList>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default User;
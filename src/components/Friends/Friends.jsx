import { FriendsBlock, FriendsListItem, Status } from "components/Friends/Friends.styled";
import PropTypes from "prop-types";

const Friends = ({friends}) => {
return (
    <FriendsBlock className="friend-list">
      {friends.map(friend => (
        <FriendsListItem key={friend.id}>
        <Status isOnline={friend.isOnline}>{friend.isOnline}</Status>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
      </FriendsListItem>
      ))}  
    </FriendsBlock>
)
};


const friendShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
});

Friends.propTypes = {
  friends: PropTypes.arrayOf(friendShape).isRequired,
};

export default Friends;
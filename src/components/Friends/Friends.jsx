import { FriendsBlock, FriendsListItem, Status } from "components/Friends/Friends.styled";

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

export default Friends;
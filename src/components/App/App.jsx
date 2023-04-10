import user from 'user.json';
import data from 'data.json';
import friendsData from 'friends.json';
import transactionsData from 'transactions.json';
import UserRender from 'components/User/User';
import Statistics from 'components/Statistics/Statistics';
import Friends from 'components/Friends/Friends';
import TransactionsHistory from 'components/TransactionsHistory/TransactionsHistory'
import {Container} from 'components/App/App.styled';

export default function App() {
  return (
  <Container>
    <UserRender
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <>
    <Statistics title="Upload stats" stats={data} />
  </>
  <div>
    <Friends friends={friendsData} />
  </div>
  <div> 
    <TransactionsHistory items={transactionsData} />
  </div>
  </Container>
  )
}


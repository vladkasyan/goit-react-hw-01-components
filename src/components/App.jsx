import user from '../components/data/user.json';
import data from '../components/data/data.json';
import friends from '../components/data/friends.json';
import transactions from '../components/data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container, Wrapper } from './App.module';


export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
       <Statistics 
        title='UPLOAD STATS'
        stats={data}
      /> 

      <Wrapper>
        <FriendList
        friends={friends}
      />

      <TransactionHistory
        transactions={transactions} />
      </Wrapper>
    </Container>
      
  );

};

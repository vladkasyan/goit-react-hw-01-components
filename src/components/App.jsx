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

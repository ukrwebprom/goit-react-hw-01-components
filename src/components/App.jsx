import userData from '../user.json';
import statData from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics'
import { FriendList } from './FriendList/friendlist';
import { TransactionHistory } from './TransactionHistory/transactionhistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: "wrap",
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e7ecf2',
        gap:'10px',
        padding:'50px'
      }}
    >
      
    <Profile {...userData} />
    <Statistics title="Download stats" stats = {statData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
  );
};

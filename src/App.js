import Card from 'components/Card';
import users from '../src/user.json';

export default function App() {
  return (
    <div>
      <Card
        avatar={users.avatar}
        username={users.username}
        tag={users.tag}
        location={users.location}
        stats={users.stats}
      />
    </div>
  );
}

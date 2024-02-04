import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

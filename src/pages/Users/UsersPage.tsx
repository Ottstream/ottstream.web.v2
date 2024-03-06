import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

export default function UsersPage() {
  return (
    <div>
      <Breadcrumbs
        lists={[{ title: <Link to="/user-list">'ronaldo' </Link> }]}
      />
    </div>
  );
}
export default UsersPage;

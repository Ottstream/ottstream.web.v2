import { Outlet } from 'react-router-dom';

import { SplitScreen } from '@/components/SplitScreen/SplitScreen';
import WelcomeOTS from '@/pages/Auth/WelcomeOTS/WelcomeOTS.jsx';

export default function AuthLayout() {
  return (
    <div>
      <SplitScreen leftWeight={6} rightWeight={7}>
        <WelcomeOTS />
        <Outlet />
      </SplitScreen>
    </div>
  );
}

import Review from './Review.svg?react';
import Providers from './Providers.svg?react';
import Users from './Users.svg?react';
import Clients from './Clients.svg?react';
import Calendar from './Calendar.svg?react';
import Discount from './Percent.svg?react';
import Packages from './Archive.svg?react';
import Transactions from './Transactions.svg?react';
import Equipments from './Equipments.svg?react';
import Shippings from './Shippings.svg?react';
import Flussonics from './Flussonics.svg?react';
import Help from './Help.svg?react';
import LogoSM from './LogoSmall.svg?react';
import Datepicker from './Datepicker.svg?react';
import Installers from './Installers.svg?react';
import History from './History.svg?react';
import Map from './Map.svg?react';
import Filter from './Filter.svg?react';

type Icons = Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;

const icons: Icons = {
  review: Review,
  providers: Providers,
  users: Users,
  clients: Clients,
  appointments: Calendar,
  discounts: Discount,
  packages: Packages,
  transactions: Transactions,
  equipments: Equipments,
  shippings: Shippings,
  flussonics: Flussonics,
  help: Help,
  logoSM: LogoSM,
  datepicker: Datepicker,
  installers: Installers,
  history: History,
  map: Map,
  filter: Filter,
};

export default icons;

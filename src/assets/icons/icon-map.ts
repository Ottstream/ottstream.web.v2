import Packages from './Archive.svg?react';
import Calendar from './Calendar.svg?react';
import Address from './Chat/Address.svg?react';
import AllChats from './Chat/AllChats.svg?react';
import Attach from './Chat/Attach.svg?react';
import Bell from './Chat/Bell.svg?react';
import BellHeader from './Chat/BellHeader.svg?react';
import Chat from './Chat/Chat.svg?react';
import Copy from './Chat/Copy.svg?react';
import DOCX from './Chat/DOCX.svg?react';
import Email from './Chat/Email.svg?react';
import Emoji from './Chat/Emoji.svg?react';
import Headphones from './Chat/Headphones.svg?react';
import Instagram from './Chat/Instagram.svg?react';
import JPG from './Chat/JPG.svg?react';
import Location from './Chat/Location.svg?react';
import Mail from './Chat/Mail.svg?react';
import PDF from './Chat/PDF.svg?react';
import Phone from './Chat/Phone.svg?react';
import ChatProvider from './Chat/Providers.svg?react';
import Sound from './Chat/Sound.svg?react';
import Telegram from './Chat/Telegram.svg?react';
import TXT from './Chat/TXT.svg?react';
import Viber from './Chat/Viber.svg?react';
import VideoCamera from './Chat/VideoCamera.svg?react';
import Whatsapp from './Chat/Whatsapp.svg?react';
import X from './Chat/X.svg?react';
import XLSX from './Chat/XLSX.svg?react';
import Clients from './Clients.svg?react';
import Close from './Close.svg?react';
import Datepicker from './Datepicker.svg?react';
import Equipments from './Equipments.svg?react';
import Filter from './Filter.svg?react';
import Flussonics from './Flussonics.svg?react';
import Help from './Help.svg?react';
import History from './History.svg?react';
import Installers from './Installers.svg?react';
import LogoSM from './LogoSmall.svg?react';
import Map from './Map.svg?react';
import Discount from './Percent.svg?react';
import Providers from './Providers.svg?react';
import Review from './Review.svg?react';
import Shippings from './Shippings.svg?react';
import Transactions from './Transactions.svg?react';
import Users from './Users.svg?react';

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
  close: Close,
  chatProviders: ChatProvider,
  videoCamera: VideoCamera,
  phone: Phone,
  email: Email,
  instagram: Instagram,
  viber: Viber,
  telegram: Telegram,
  whatsapp: Whatsapp,
  x: X,
  bell: Bell,
  location: Location,
  address: Address,
  mail: Mail,
  copy: Copy,
  headphones: Headphones,
  attach: Attach,
  chat: Chat,
  allChats: AllChats,
  sound: Sound,
  emoji: Emoji,
  pdf: PDF,
  txt: TXT,
  xlsx: XLSX,
  jpg: JPG,
  docx: DOCX,
  bellHeader: BellHeader,
};

export default icons;

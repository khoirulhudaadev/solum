import { routes } from '@/config/routes';
import dynamic from 'next/dynamic';

// Dynamic imports untuk ikon yang digunakan
const PiHouse = dynamic(() => import('react-icons/pi').then(mod => mod.PiHouse));
const PiCalendar = dynamic(() => import('react-icons/pi').then(mod => mod.PiCalendar));
const PiBoundingBox = dynamic(() => import('react-icons/pi').then(mod => mod.PiBoundingBox));
const PiCalendarDuotone = dynamic(() => import('react-icons/pi').then(mod => mod.PiCalendarDuotone));
const PiCurrencyDollarDuotone = dynamic(() => import('react-icons/pi').then(mod => mod.PiCurrencyDollarDuotone));
const PiUserCirclePlus = dynamic(() => import('react-icons/pi').then(mod => mod.PiUserCirclePlus));
const PiUserFocus = dynamic(() => import('react-icons/pi').then(mod => mod.PiUserFocus));
const PiUser = dynamic(() => import('react-icons/pi').then(mod => mod.PiUser));
const PiGear = dynamic(() => import('react-icons/pi').then(mod => mod.PiGear));

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  {
    name: 'Overview',
  },
  {
    name: 'Dashboard',
    href: routes.appointment.dashboard,
    icon: <PiHouse />,
  },
  {
    name: 'Invoice',
    href: routes.invoice.home,
    icon: <PiCurrencyDollarDuotone />,
  },
  {
    name: 'Appointment',
    href: routes.appointment.appointmentList,
    icon: <PiCalendarDuotone />,
  },
  {
    name: 'Patients',
    href: routes.patient.dashboard,
    icon: <PiUserCirclePlus />,
  },
  {
    name: 'Doctors',
    href: routes.doctor.dashboard,
    icon: <PiUserFocus />,
  },
  {
    name: 'Calendars',
    href: routes.eventCalendar,
    icon: <PiCalendar />,
  },
  {
    name: 'Users',
    href: routes.user.dashboard,
    icon: <PiUser />,
  },
  {
    name: 'Products',
    href: routes.forms.notificationPreference,
    icon: <PiBoundingBox />,
  },
  {
    name: 'Settings',
    href: routes.forms.profileSettings,
    icon: <PiGear />,
  },
];
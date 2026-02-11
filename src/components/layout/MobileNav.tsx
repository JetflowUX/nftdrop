import React from 'react';
import { Home, Calendar, PlusCircle, Bookmark, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';
export function MobileNav() {
  const links = [
  {
    icon: Home,
    label: 'Home',
    path: '/'
  },
  {
    icon: Calendar,
    label: 'Calendar',
    path: '/calendar'
  },
  {
    icon: PlusCircle,
    label: 'Submit',
    path: '/submit'
  },
  {
    icon: Bookmark,
    label: 'Watch',
    path: '/watchlist'
  },
  {
    icon: Users,
    label: 'Comm',
    path: '/community'
  }];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-xl border-t border-white/10 z-50 pb-safe">
      <div className="flex justify-around items-center p-2">
        {links.map((link) =>
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => `
              flex flex-col items-center gap-1 p-2 rounded-lg transition-colors w-full
              ${isActive ? 'text-primary-electric' : 'text-text-secondary hover:text-white'}
            `}>

            <link.icon size={20} />
            <span className="text-[10px] font-medium">{link.label}</span>
          </NavLink>
        )}
      </div>
    </div>);

}
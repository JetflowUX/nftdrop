import React from 'react';
import { TrendingUp, Calendar, Zap, BarChart3 } from 'lucide-react';
export function StatsBar() {
  const stats = [
  {
    label: 'Mints Today',
    value: '12',
    icon: Calendar,
    color: 'text-blue-400'
  },
  {
    label: 'Live Now',
    value: '3',
    icon: Zap,
    color: 'text-yellow-400'
  },
  {
    label: 'Upcoming (7d)',
    value: '45',
    icon: TrendingUp,
    color: 'text-green-400'
  },
  {
    label: '24h Volume',
    value: '₳ 1.2M',
    icon: BarChart3,
    color: 'text-purple-400'
  }];

  return (
    <div className="border-y border-white/5 bg-surface/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {stats.map((stat, index) =>
          <div
            key={index}
            className="flex items-center justify-center gap-3 py-6 group hover:bg-white/5 transition-colors cursor-default">

              <div
              className={`p-2 rounded-lg bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>

                <stat.icon size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold font-heading">
                  {stat.value}
                </div>
                <div className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}
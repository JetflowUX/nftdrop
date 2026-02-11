import React from 'react';
import { Calendar, Heart, Bell, ExternalLink } from 'lucide-react';
import { MintProject } from '../../data/mockMints';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { TagPill } from '../ui/TagPill';
import { VerifiedBadge } from '../ui/VerifiedBadge';
import { PriceBadge } from '../ui/PriceBadge';
import { HeatIndicator } from '../ui/HeatIndicator';
import { CountdownTimer } from '../ui/CountdownTimer';
import { Link } from 'react-router-dom';
interface MintCardProps {
  project: MintProject;
  viewMode?: 'grid' | 'list';
}
export function MintCard({ project }: MintCardProps) {
  return (
    <GlassCard
      hoverEffect
      className="group relative flex flex-col h-full overflow-hidden !p-0">

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <TagPill
            label={project.category}
            type="category"
            className="backdrop-blur-md" />

          {project.isLive &&
          <span className="bg-secondary-teal text-background text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
              LIVE
            </span>
          }
        </div>

        {/* Action Overlay (Visible on Hover) */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button variant="secondary" size="sm" className="!rounded-full !p-3">
            <Heart size={18} />
          </Button>
          <Button variant="secondary" size="sm" className="!rounded-full !p-3">
            <Bell size={18} />
          </Button>
          <Link to={`/mint/${project.id}`}>
            <Button variant="primary" size="sm" className="!rounded-full !px-4">
              View Details
            </Button>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white truncate pr-2 group-hover:text-primary-electric transition-colors">
            {project.name}
          </h3>
          {project.isVerified && <VerifiedBadge />}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <HeatIndicator level={project.hypeLevel} />
          <span className="text-xs text-text-secondary">•</span>
          <span className="text-xs text-text-secondary">
            {project.supply.toLocaleString()} items
          </span>
        </div>

        {/* Countdown Area */}
        <div className="bg-surface-light/30 rounded-lg p-3 mb-4 border border-white/5">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-text-secondary uppercase tracking-wider">
              Mint Date
            </span>
            <span className="text-xs font-mono text-primary-electric">
              {new Date(project.mintDate).toLocaleDateString()}
            </span>
          </div>
          {!project.isLive &&
          <div className="flex justify-center py-1">
              <CountdownTimer targetDate={project.mintDate} size="sm" />
            </div>
          }
          {project.isLive &&
          <div className="text-center font-bold text-secondary-teal py-1 animate-pulse">
              MINTING NOW
            </div>
          }
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-xs text-text-secondary">Price</span>
            <PriceBadge price={project.mintPrice} />
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="!p-2">
              <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>
    </GlassCard>);

}
import React from 'react';
import { Radar, Twitter, Disc, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Radar className="text-primary-electric" size={24} />
              <span className="font-heading font-bold text-xl text-white">
                MintRadar <span className="text-primary-electric">ADA</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              The premium community-driven NFT calendar for the Cardano
              ecosystem. Track, discover, and mint with confidence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-text-secondary hover:text-white transition-colors">

                <Twitter size={20} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord server"
                className="text-text-secondary hover:text-white transition-colors">

                <Disc size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our GitHub repository"
                className="text-text-secondary hover:text-white transition-colors">

                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-electric transition-colors">

                  Upcoming Drops
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className="hover:text-primary-electric transition-colors">

                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/submit"
                  className="hover:text-primary-electric transition-colors">

                  Submit Project
                </Link>
              </li>
              <li>
                <Link
                  to="/verified"
                  className="hover:text-primary-electric transition-colors">

                  Verification Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link
                  to="/community"
                  className="hover:text-primary-electric transition-colors">

                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary-electric transition-colors">

                  Blog & News
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-electric transition-colors">

                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-electric transition-colors">

                  Twitter Spaces
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary-electric transition-colors">

                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary-electric transition-colors">

                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-primary-electric transition-colors">

                  Risk Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} MintRadar ADA. All rights reserved.</p>
          <p>Not financial advice. DYOR.</p>
        </div>
      </div>
    </footer>);

}
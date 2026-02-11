export interface MintProject {
  id: string;
  name: string;
  coverImage: string;
  mintDate: string;
  mintPrice: number;
  supply: number;
  minted: number;
  category: 'PFP' | 'Art' | 'Utility' | 'Gaming' | '1/1' | 'Music';
  isVerified: boolean;
  isLive: boolean;
  isHot: boolean;
  hypeLevel: 1 | 2 | 3 | 4 | 5;
  communityRating: number;
  description: string;
  policyId: string;
  website: string;
  twitter: string;
  discord: string;
  upvotes: number;
  downvotes: number;
}

export const mockMints: MintProject[] = [
{
  id: '1',
  name: 'Cyber Samurai ADA',
  coverImage:
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(), // 2 hours from now
  mintPrice: 45,
  supply: 5555,
  minted: 0,
  category: 'PFP',
  isVerified: true,
  isLive: false,
  isHot: true,
  hypeLevel: 5,
  communityRating: 98,
  description:
  'A collection of 5,555 unique Cyber Samurais protecting the Cardano blockchain. Featuring high-utility staking and DAO governance.',
  policyId: '8f9c...3a2b',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 1240,
  downvotes: 12
},
{
  id: '2',
  name: 'Nebula Explorers',
  coverImage:
  'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=800&q=80',
  mintDate: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // Started 30 mins ago
  mintPrice: 120,
  supply: 1000,
  minted: 450,
  category: 'Art',
  isVerified: true,
  isLive: true,
  isHot: true,
  hypeLevel: 4,
  communityRating: 92,
  description:
  'Generative space art exploring the depths of the nebula. Each piece is a unique window into the cosmos.',
  policyId: '2d4e...9f1a',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 850,
  downvotes: 45
},
{
  id: '3',
  name: 'Cardano City',
  coverImage:
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days
  mintPrice: 80,
  supply: 10000,
  minted: 0,
  category: 'Gaming',
  isVerified: true,
  isLive: false,
  isHot: false,
  hypeLevel: 3,
  communityRating: 85,
  description:
  'Build your empire in the first fully on-chain city builder game on Cardano.',
  policyId: '5b7c...1e2d',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 560,
  downvotes: 30
},
{
  id: '4',
  name: 'Pixel Punks ADA',
  coverImage:
  'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(),
  mintPrice: 25,
  supply: 3333,
  minted: 0,
  category: 'PFP',
  isVerified: false,
  isLive: false,
  isHot: false,
  hypeLevel: 2,
  communityRating: 70,
  description: 'Retro pixel art punks for the new era of Cardano.',
  policyId: '9a1b...4c3d',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 200,
  downvotes: 15
},
{
  id: '5',
  name: 'Utility Key Access',
  coverImage:
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  mintDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // Yesterday
  mintPrice: 500,
  supply: 100,
  minted: 100,
  category: 'Utility',
  isVerified: true,
  isLive: false,
  isHot: true,
  hypeLevel: 5,
  communityRating: 99,
  description: 'Lifetime access pass to the Alpha Caller tools suite.',
  policyId: '1a2b...3c4d',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 1500,
  downvotes: 5
},
{
  id: '6',
  name: 'SoundWave Genesis',
  coverImage:
  'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
  mintPrice: 60,
  supply: 2000,
  minted: 0,
  category: 'Music',
  isVerified: true,
  isLive: false,
  isHot: false,
  hypeLevel: 3,
  communityRating: 88,
  description: 'First generative music NFT on Cardano with royalty sharing.',
  policyId: '4d5e...6f7g',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 420,
  downvotes: 10
},
{
  id: '7',
  name: 'Abstract Minds',
  coverImage:
  'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(),
  mintPrice: 150,
  supply: 500,
  minted: 0,
  category: 'Art',
  isVerified: true,
  isLive: false,
  isHot: true,
  hypeLevel: 4,
  communityRating: 94,
  description: 'Curated abstract art collection from top digital artists.',
  policyId: '7h8i...9j0k',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 600,
  downvotes: 8
},
{
  id: '8',
  name: 'Loot Bags ADA',
  coverImage:
  'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10).toISOString(),
  mintPrice: 0,
  supply: 8000,
  minted: 0,
  category: 'Gaming',
  isVerified: false,
  isLive: false,
  isHot: false,
  hypeLevel: 2,
  communityRating: 65,
  description: 'Free mint loot bags for upcoming RPG.',
  policyId: '0l1m...2n3o',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 300,
  downvotes: 50
},
{
  id: '9',
  name: 'Golden Ticket',
  coverImage:
  'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
  mintDate: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // Live now
  mintPrice: 999,
  supply: 100,
  minted: 88,
  category: 'Utility',
  isVerified: true,
  isLive: true,
  isHot: true,
  hypeLevel: 5,
  communityRating: 97,
  description: 'Exclusive access to the whale investment group.',
  policyId: '3p4q...5r6s',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 900,
  downvotes: 20
},
{
  id: '10',
  name: 'Mecha Verse',
  coverImage:
  'https://images.unsplash.com/photo-1614726365723-49cfae96c692?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString(),
  mintPrice: 75,
  supply: 4444,
  minted: 0,
  category: 'PFP',
  isVerified: true,
  isLive: false,
  isHot: true,
  hypeLevel: 4,
  communityRating: 89,
  description: '3D rendered Mecha robots ready for the metaverse.',
  policyId: '6t7u...8v9w',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 550,
  downvotes: 12
},
{
  id: '11',
  name: 'Glitch Flowers',
  coverImage:
  'https://images.unsplash.com/photo-1605106702734-205df224ecce?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
  mintPrice: 35,
  supply: 1111,
  minted: 0,
  category: 'Art',
  isVerified: false,
  isLive: false,
  isHot: false,
  hypeLevel: 1,
  communityRating: 60,
  description: 'Experimental glitch art flowers.',
  policyId: '9x0y...1z2a',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 120,
  downvotes: 5
},
{
  id: '12',
  name: 'Cardano Nodes',
  coverImage:
  'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80',
  mintDate: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
  mintPrice: 200,
  supply: 500,
  minted: 0,
  category: 'Utility',
  isVerified: true,
  isLive: false,
  isHot: true,
  hypeLevel: 4,
  communityRating: 91,
  description: 'Run a node, earn rewards. NFT represents node ownership.',
  policyId: '2b3c...4d5e',
  website: 'https://example.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  upvotes: 780,
  downvotes: 15
}];
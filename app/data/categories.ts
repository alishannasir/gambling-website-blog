export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "action",
    name: "Action Games",
    description: "Fast-paced games that test your reflexes and hand-eye coordination.",
    slug: "action-games",
  },
  {
    id: "rpg",
    name: "RPG Games",
    description: "Immersive role-playing games with deep stories and character progression.",
    slug: "rpg-games",
  },
  {
    id: "strategy",
    name: "Strategy Games",
    description: "Games that challenge your tactical thinking and planning skills.",
    slug: "strategy-games",
  },
  {
    id: "sports",
    name: "Sports Games",
    description: "Simulation of real-world sports and competitive events.",
    slug: "sports-games",
  },
  {
    id: "mobile",
    name: "Mobile Games",
    description: "Best games optimized for smartphones and tablets.",
    slug: "mobile-games",
  },
  {
    id: "indie",
    name: "Indie Games",
    description: "Unique and creative games from independent developers.",
    slug: "indie-games",
  },
  {
    id: "casino",
    name: "Casino & Slots",
    description: "Reviews and guides for online casino games and slots.",
    slug: "casino-games",
  },
];

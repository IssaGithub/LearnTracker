export interface Task {
  id: string;
  title: string;
  description?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  completed: boolean;
}

export interface UserProgress {
  level: number;
  xp: number;
  xpToNextLevel: number;
  streakDays: number;
}

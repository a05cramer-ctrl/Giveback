// Mock data generators for $GIVEBACK

export interface ActivityItem {
  id: string;
  time: Date;
  type: 'Reward Distribution';
  wallet: string;
  amount: number;
  transaction: string;
  isNew?: boolean;
}

export interface VaultStats {
  totalDistributed: number;
  currentBalance: number;
  distributions: number;
  estimatedAPR: number;
}

// Generate random wallet address (shortened)
function generateWallet(): string {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let wallet = '';
  for (let i = 0; i < 8; i++) {
    wallet += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${wallet}...${wallet.slice(0, 4)}`;
}

// Generate random transaction hash
function generateTxHash(): string {
  const chars = '0123456789abcdef';
  let hash = '';
  for (let i = 0; i < 64; i++) {
    hash += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return hash;
}

// Generate random SOL amount (0.1 - 0.5 SOL)
function generateAmount(): number {
  return Math.random() * 0.4 + 0.1;
}

// Generate initial activity feed
export function generateInitialActivity(count: number = 20): ActivityItem[] {
  const activities: ActivityItem[] = [];
  const now = new Date();
  const baseTime = now.getTime();
  
  for (let i = 0; i < count; i++) {
    // Generate random time between 1-20 seconds ago
    const secondsAgo = Math.random() * 19 + 1; // 1 to 20 seconds
    const time = new Date(baseTime - secondsAgo * 1000);
    
    activities.push({
      id: `activity-${baseTime}-${i}-${Math.random().toString(36).substr(2, 9)}`,
      time,
      type: 'Reward Distribution',
      wallet: generateWallet(),
      amount: generateAmount(),
      transaction: generateTxHash(),
      isNew: false,
    });
  }
  
  // Sort by time (most recent first)
  return activities.sort((a, b) => b.time.getTime() - a.time.getTime());
}

// Generate new activity item
export function generateNewActivity(): ActivityItem {
  return {
    id: `activity-${Date.now()}`,
    time: new Date(),
    type: 'Reward Distribution',
    wallet: generateWallet(),
    amount: generateAmount(),
    transaction: generateTxHash(),
    isNew: true,
  };
}

// Mock vault stats
export function getVaultStats(): VaultStats {
  return {
    totalDistributed: 2.5,
    currentBalance: 2.47,
    distributions: 18,
    estimatedAPR: 18.5,
  };
}

// Format SOL amount
export function formatSOL(amount: number): string {
  return amount.toFixed(4);
}

// Format wallet address (shortened)
export function formatWallet(wallet: string): string {
  return wallet;
}

// Format time
export function formatTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return date.toLocaleDateString();
}


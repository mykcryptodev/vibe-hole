/**
 * Get statistics about the payout function
 * @returns Object containing probability stats
 */
export function getPayoutStats() {
  return {
    expectedValue: 1,
    probabilityLessThan: {
      '0.5': 0.393, // 39.3% chance of getting less than 0.5x
      '1.0': 0.632, // 63.2% chance of getting less than 1.0x
      '2.0': 0.865, // 86.5% chance of getting less than 2.0x
      '3.0': 0.950, // 95.0% chance of getting less than 3.0x
      '4.0': 0.982, // 98.2% chance of getting less than 4.0x
      '5.0': 0.993, // 99.3% chance of getting less than 5.0x
    },
    jackpotChance: {
      '5x or more': 0.007, // 0.7% chance
      '10x or more': 0.00005, // 0.005% chance
    }
  };
}

/**
 * Creates a discretized version of the payout with specific tiers
 * Still maintains expected value of 1
 * 
 * @returns A number representing a tiered payout multiplier
 */
export function getTieredPayoutMultiplier(): number {
  const random = Math.random();
  
  // Define tiers with probabilities and multipliers
  if (random < 0.60) return 0.25;    // 60% chance of 0.25x
  if (random < 0.85) return 1.00;    // 25% chance of 1.00x
  if (random < 0.95) return 2.50;    // 10% chance of 2.50x
  if (random < 0.99) return 5.00;    // 4% chance of 5.00x
  return 15.00;                      // 1% chance of 15.00x
} 
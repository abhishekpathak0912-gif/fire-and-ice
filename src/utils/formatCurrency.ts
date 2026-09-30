export function formatNPR(amount: number): string {
  return `NPR ${amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
}

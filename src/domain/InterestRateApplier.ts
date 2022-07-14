export interface InterestRateApplier {
  setInterestRate(newInterestRate: number);
  calculateInterestRate(): number;
}
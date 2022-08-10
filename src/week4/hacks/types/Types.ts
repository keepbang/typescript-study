export type HomeKit = string;
export type AwayKit = string;
export type ThirdKit = string;
export type Uniform = { homeKit: HomeKit, awayKit: AwayKit, thirdKit?: ThirdKit };

export const GangwonUniform: Uniform = {
  homeKit: 'orange',
  awayKit: 'white',
};

export const TottenhamUniform: Uniform = {
  homeKit: 'white',
  awayKit: 'purple',
  thirdKit: 'yellow',
};
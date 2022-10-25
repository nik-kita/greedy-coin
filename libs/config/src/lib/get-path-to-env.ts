import { config } from 'dotenv';

config();

export function getPathToEnv() {
  return `${process.cwd()}/.${process.env.ENV_COLOR}.env`;
}

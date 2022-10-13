const getEnv = (name: string): string => {
  if (!process.env[name]) {
    throw Error(`Variable ${name} isn't exist!`);
  }
  return process.env[name];
};

export default getEnv;

import path from 'path';

const build = (env: string) => {
  let build_path = `${path.resolve(__dirname, '..')}/build/${env}`;
  return build_path;
};

export { build };

export function rawHost(host: `${'http' | 'https'}${string}`) {
  const splitted = host.split(/https?:\/\//);

  return splitted.length === 2
    ? splitted[1]
    : splitted[0];
}

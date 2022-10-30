export function rawHost(host: `${'http' | 'https'}${string}`) {
  const splited = host.split(/https?:\/\//);

  return splited.length === 2
    ? splited[1]
    : splited[0];
}

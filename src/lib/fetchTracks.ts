const apiToken: string =
  'BQAoOjz7INkMqQ2C_A67WIfImfckSLO2snRr0b-29pJzx1xkWwoW-JB5kBgzzZ1sDfus5bgTL9W2H3d27CzE9N42BI8npWjRoFI4rWq5rDWBExXBbNyEIa6S7Wd60GBtrxL9WWgD1mmx95-yNXkO-LnM413enOwqRWr7pCNMyHNiN_UgNvxwqogf5ICZmM17T6nqKJQfCHvgYNn-oorNvXFQUtqdjC67grUhyWcSB1wZVbVPwJoe_bYtcHiQAc-34LF-4DWNbyOjmaZr76LOVG8PAryKdEUhDkAUyHe-0Gs_yqtgU3A3OT3t7oJ09HA37LGxfLTvj3YWq8g4lJtZ70V3IZyCvRE';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });

  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }

  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};

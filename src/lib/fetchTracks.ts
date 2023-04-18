import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQBeU456fLXc1xTiCN7PPWRwx8t8R4LBIbxF3avqaZuWKm_Irlsq9H0LPVgPtyO6RubmK4kE5hHwjkMo0k47w6bM7ZAyNZqRqSIDDtI0gXV1uO4zpbusxNhwXosZH22SDQfWZrHfKBfLeAb5xF-MNcVMKOIENK-GUF4hIWS3ymwo_sVZsCTlCfOZHC4DPk5FjJ09bWqlUBioZp3NMxAuElNlM068UnzebNfvXPYzittsOln2miyZfdKQKf07PJwgZ566H4TVMGKoREJPxX0fX2cHRjT_fo5es84YDt8PbyFZeJ_VMmFmuM4GEgonUqs7EpxFKXkCZ8vLdb4pU-a1yzeVjEZxym0';

export const fetchTracks = async () : Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });

  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }

  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};

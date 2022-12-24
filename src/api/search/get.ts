const apiKey = process.env.REACT_APP_RIOT_API_KEY;

const getGameVersion = async () => {
  const versionUrl = 'https://ddragon.leagueoflegends.com/api/versions.json';
  console.log(apiKey);
  return await fetch(versionUrl)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const getUserInfo = async (userName: string) => {
  const url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${apiKey}`;

  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export { getGameVersion, getUserInfo };

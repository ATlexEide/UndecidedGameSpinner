export async function getUserProfile(steamID, setUser) {
  await fetch(
    `https://undecidedgamespinnerserver-production.up.railway.app/user/${steamID}`
  )
    .then((res) => res.json())
    .then((res) => res.response.players[0])
    .then((res) => {
      setUser(res);
    });
}

const BASE_URL = 'https://swapi.dev/api/starships/9/'

async function getStarShips () {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(err)
  }
}
export default getStarShips
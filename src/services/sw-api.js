const baseUrl = 'https://swapi.dev/api/starships'

async function getStarShips () {
  try {
    const res = await fetch(`${baseUrl}`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}
export default getStarShips
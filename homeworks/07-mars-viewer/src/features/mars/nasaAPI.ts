const API_KEY = '3kiSvCkEh0zo15za1FxhzexghZyqPVITX44brEo8'

export interface Camera {
  id: number,
  roverID: number,
  name: string,
  full_name: string
}
export interface Rover {
  id: number,
  name: string,
  landingData: Date,
  launchDate: Date,
  status: string
}

export interface Photos {
  id: number,
  sol: number,
  camera: Camera,
  img_src: string,
  earthDate: Date,
  rover: Rover
}

export const fetchMarsData = (sol: number): Promise<any> => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${sol}&api_key=${API_KEY}`
  return fetch(url)
    .then(res => res.json())
    .then((data) => data.photos)
}

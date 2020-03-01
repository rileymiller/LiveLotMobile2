import { XOutboundLotDTO } from 'api/lots/XOutboundLotDTO'
import { SERVER_URL } from 'react-native-dotenv'

/**
* This method will return an array of lots upon a successful request
* error when passed a bad request or invalid token
* 
* The /lot endpoint is located at https://github.com/maddiearogers/LiveLotAppAPI/blob/master/api/controllers/lotCtrl.js 
* under the lot export
* 
*/
const getLots = async (): Promise<XOutboundLotDTO[]> => {
  const lotEndpoint = '/lot'


  console.log(SERVER_URL + lotEndpoint)
  const response = await fetch(SERVER_URL + lotEndpoint, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  })

  if (!response.ok) {
    const json = await response.json()
    throw Error(`${response.status} Error: ${json.message}`)
  }

  const body = await response.json()
  console.log('Success, lots returned!', body)
  return body
}

export { getLots }
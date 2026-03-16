import type {
  MovieData,
  SimpleSuccessResponse,
  SimpleErrorResponse,
  ApiResponse,
} from '../models/models'

async function fetchChannels(): Promise<ApiResponse<MovieData>> {
  const timeout = Math.random() * 1000 + 1000
  await new Promise((resolve) => setTimeout(resolve, timeout))

  const errorChance = Math.floor(Math.random() * 10)
  if (errorChance === 2 || errorChance === 5) {
    return {
      status: 'error',
      responseCode: 500,
    }
  }
  const res = await fetch('../static/data/channelsData.json')
  const data = await res.json()

  return {
    status: 'success',
    responseCode: 200,
    data: data as MovieData,
  }
}

export async function getChannelsData(): Promise<SimpleSuccessResponse | SimpleErrorResponse> {
  const res = await fetchChannels()
  if (res.status === 'success') {
    return { data: res.data ?? [] }
  } else {
    console.error(res)
    return { error: true }
  }
}

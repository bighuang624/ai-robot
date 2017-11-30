import fetch from '../utils/fetch'

export function ask (params) {
  return fetch({
    url: '/ask',
    method: 'get',
    params: params
  })
}

import fetch from '../utils/fetch'

export function ask (params) {
  return fetch({
    url: '/ask',
    method: 'get',
    params: params
  })
}

export function train (params) {
  return fetch({
    url: '/train',
    method: 'get',
    params: params
  })
}

export function appraise (params) {
  return fetch({
    url: '/appraise',
    method: 'get',
    params: params
  })
}

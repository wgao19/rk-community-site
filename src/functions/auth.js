import axios from 'axios'

export const handler = async (event, _, callback) => {
  try {
    _retrieveToken(event, callback)
  } catch (e) {
    callback(Error(e), {
      status: 500,
      body: 'Server Error',
    })
  }
}

function _retrieveToken(event, callback) {
  const { code, state, redirect_uri } = event.queryStringParameteres
  if (!code || !state || !redirect_uri) {
    throw new Error('Missing parameters')
  }
  axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: {
      code,
      redirect_uri,
      state,
      clientId: __RK_RSVP_CLIENT_ID__,
      clientSecret: __RK_RSVP_CLIENT_SECRET__,
    },
  })
    .then(res => res.json())
    .then(res => {
      callback(null, {
        status: 200,
        body: res,
      })
    })
}
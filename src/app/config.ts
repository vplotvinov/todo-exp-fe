interface Config {
  apiHost: string
}

const developmentConfig: Config = {
  apiHost: 'https://localhost:3000',
}

const prodConfig: Config = {
  apiHost: 'https://api.surftodo.one',
}

let config = { ...developmentConfig }

if (process.env.NODE_ENV === 'production') {
  config = { ...prodConfig }
}

export default config as Config

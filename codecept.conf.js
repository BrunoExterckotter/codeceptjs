exports.config = {
  tests: './test/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'www.google.com',
      browser: 'chrome',
      smartWait: 15000,
      waitForTimeout : 15000
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'codeceptjsLinx'
}
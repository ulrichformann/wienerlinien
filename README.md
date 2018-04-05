# wienerlinien

Nodejs Wiener Linien API

## Getting started
You will need an API-key witch you can obtain [`here`](https://go.gv.at/l9ogdechtzeitdatenwienerlinienkeyanforderung)

## Install

```
npm i wienerlinien
#or
yarn add wienerlinien
```

## Usage

```javascript
const Wienerlinien = require('wienerlinien')

const wl = new Wienerlinien(API_KEY)

wl.monitor(500).then(data => {
	console.log(data)
})

wl.monitor(100, 200).then(data => {
	console.log(data)
})
```

## Problems
You can find the official docs [`here`](https://go.gv.at/l9ogdechtzeitdatenwienerliniendokumentation)
If you have andy suggestions feel free to create an [`issue`](https://github.com/ulrichformann/wienerlinien/issues/new)

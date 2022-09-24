# MonagoJS - Fast And Customized APIs Library From Monago.io

[![Maintainability Rating](https://sonarqube.monago.io/api/project_badges/measure?project=monagoio_monagojs_AYK1U5X5gSsHaZNf2KXx&metric=sqale_rating&token=ca1d4cb7900cd7b5427000373f3e562b0d8d60ad)](https://sonarqube.monago.io/dashboard?id=monagoio_monagojs_AYK1U5X5gSsHaZNf2KXx)
[![Reliability Rating](https://sonarqube.monago.io/api/project_badges/measure?project=monagoio_monagojs_AYK1U5X5gSsHaZNf2KXx&metric=reliability_rating&token=ca1d4cb7900cd7b5427000373f3e562b0d8d60ad)](https://sonarqube.monago.io/dashboard?id=monagoio_monagojs_AYK1U5X5gSsHaZNf2KXx)
[![npm version](https://img.shields.io/npm/v/@monagoio/monagojs.svg?style=flat-square)](https://www.npmjs.org/package/@monagoio/monagojs) 
[![npm downloads](https://img.shields.io/npm/dm/@monagoio/monagojs.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@monagoio/monagojs)

SDK for monago platform, help developers to create and consume apis without managing the fullcode and its infrastructure

**Note**: This library is only meant for usage from server-side with Monago secret API key.
For PCI compliance to be maintained, tokenization of apis url info should be done on client side with monago dashboard.

## Table of Contents

  - [Usage](#usage)
  - [How To Use](#howtouse)

## Usage

First, you need to install the library

```bash
$ npm install @monagoio/monagojs
```
or

```bash
$ yarn add @monagoio/monagojs
```

Then, you create a project through Monago dashboard to get a **secretKey** to grant the access for the client application.

```js
import { MonagoClient } from '@monagoio/monagojs'

const client = new MonagoClient({
  secretKey: "*******"
})
```

## How to Use
There are basic usages for developers to leverage Monago SDK such as register, login, create, read, update, delete. Remember, define you model and data through Monago dashboard. 

### Example

#### Register 
To use **register** function, you can pass your data such as below.

``` js
client.register({ email: "monago@example.com",username : "monago", password: "pass" })

```

#### Login 
To use **login** function, you can pass your data such as below.

``` js
client.login({ username : "monago", password: "pass" })

```

#### Create 
To use **create** function, you can pass your data such as below.

``` js
client.post({ url: "/todos", data: {
    "name": "Build an app",
    "description": "Awesome apps ready to be released",
    "date": "2022-05-18T08:51:52.031Z"
}})

```

#### Read 
To use **read** function, you can pass your data such as below.

``` js
client.get({ url: "/todos/:uuid" })

```

#### Update 
To use **update** function, you can pass your data such as below.

```js
client.put({ url: "/todos/:uuid", data: {
    "name": "[Postponed] Build an app",
    "description": "Awesome apps ready to release",
    "date": "2022-06-18T08:51:52.031Z"
}})

```

#### Delete 
To use **delete** function, you can pass your data such as below.

``` js
client.delete({ url: "/todos/:uuid" })

```

You can check the url through Monago dashboard > project > endpoint, then the uuid through your ownn project documentation through the Monago dashboard.


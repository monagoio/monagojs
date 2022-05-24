# MonagoJS

[![npm version](https://img.shields.io/npm/v/@monagoio/monagojs.svg?style=flat-square)](https://www.npmjs.org/package/@monagoio/monagojs) 
[![Coverage Status](https://coveralls.io/repos/github/monagoio/monagojs/badge.svg?branch=master)](https://coveralls.io/github/monagoio/monagojs?branch=master)
[![install size](https://packagephobia.now.sh/badge?p=@monagoio/monagojs)](https://packagephobia.now.sh/result?p=@monagoio/monagojs)
[![npm downloads](https://img.shields.io/npm/dm/@monagoio/monagojs.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@monagoio/monagojs)
[![gitter chat](https://img.shields.io/gitter/room/@monagoio/monagojs.svg?style=flat-square)](https://gitter.im/monagojs)
[![code helpers](https://www.codetriage.com/monagoio/monagojs/badges/users.svg)](https://www.codetriage.com/monagoio/monagojs)
[![Known Vulnerabilities](https://snyk.io/test/npm/@monagoio/monagojs/badge.svg)](https://snyk.io/test/npm/@monagoio/monagojs)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/monagoio/monagojs)

SDK for monago platform, help developers to create and consume apis without managing the fullcode and its infrastructure

[![NPM](https://nodei.co/npm/@monagoio/monagojs.png)](https://nodei.co/npm/@monagoio/monagojs/)

**Note**: This library is only meant for usage from server-side with Monago secret API key.
For PCI compliance to be maintained, tokenization of apis url info should be done on client side with monago dashboard.

## Table of Contents

  - [Installing](#installing)
  - [Features](#features)
    - [Usage Guest (Consume APIs)](#usage-as-guest-mode)
    - [Admin Usage](#admin)
  - [Example](#example)
  - [IAM](#iam)
  - [Browser Support](#browser-support)


## Installing

Using npm:

```bash
$ npm install @monagoio/monagojs
```

Using bower:

```bash
$ bower install @monagoio/monagojs
```

Using yarn:

```bash
$ yarn add @monagoio/monagojs
```

Using pnpm:

```bash
$ pnpm add @monagoio/monagojs
```

## Features
### Usage as Guest Mode
```js
const { Monago } = require('@monagoio/monagojs');

const monagoClient = new Monago({
  guest: {
    projectName: "my-project",
    userName: "my-name",
    token: "***************"
  }
});
```
**Guest Mode** is used as a client that has access to fires that have been created through the monago application
> - **projectName** : name of project created in monago platforms
> - **userName** : username registered
> - **token** : token of project

### Admin
- Login with Github and Github access token
- Make Project
- Make Model
- Make Route
- Setting Project

### Guest
- Login with email or social media
- Make data using access and role

## Example

Admin Dashboard (User who have access to manage projects)
### Login Admin (Dashboard)

```
const monago = new Monago()
<button onClick={monago.admin.login}> Login </button>
```

#### Create Project
```
function createProject({name, description}) {
   monago.admin.project.createProject({name, description})
    // @monagoio/monagojs({method POST, headers, host, data: {name, description}})
}

<button onClick={createProject}> Create Project Todo </button>
```
explanation:
createProject({name: “todo-app”, description: “crud for todo”})



#### Create Model
```
function createModel({models : [{colomn, validation, datatype}]}) {
   monago.admin.project.createProject(models)
}

<button onClick={createModel}> Create Model Todo </button>
```
explanation:
createModel({name: “todos”, models: models})

Will be create apis:
POST api/todos/
GET api/todos/:id
GET api/todos?page=1&limit=10
PUT api/todos



### Guest (User who have access to use project apis)
#### Login Guest (Dashboard)
```
const monago = new Monago({
   guest: {
      projectName: “todo-app”,
      token: “AysasdMs”
   }
})

function login({credential_type, username, password })


<button onClick={monago.guest.login}> Login </button>

```
explanation:

credential_type = {email, social_media , otp}

Client A => new Monago() => login => creds ABCd
Client B => new Monago()=> login => creds AdeC

#### Create Todo
```
function createTodo(){
monago.guest.apis.post({
    url: “post/create”,
    data: data
})
}

<button onClick={createTodo}> Add Todo </button>
```


## IAM
Roles role: {restricted , public, admin,  (++role)


## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | [![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/oauth-ibidathoillah-3611d.svg)](https://saucelabs.com/u/oauth-ibidathoillah-3611d) |
--- | --- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ | Tested ✔ |


# Express.js + Vue.js + Nuxt + Vuetify + Vue-Router

## Installation

1. Install the express.js in project directory
  
  ```
npm install 
  ```

2. Install the dependencies in /vue

  ```
npm install
  ```

3. Start build file with nuxt and run server 

  ```
  npm run start
  ```

4. Start the server in production mode

  ```
  npm run prod
  ```

6. Visit http://localhost:3000


## Very Important!!!
Fix in stylus-loader module in file patchcache.js function normalizePaths(paths) to destination source code:
  ```
function normalizePaths(paths) {
  for(var i in paths) {
    if(typeof paths[i]!=='function') 
      paths[i] = path.normalize(paths[i]);
   // else console.log('function',paths[i]);
  }
  return paths;
}
  ```

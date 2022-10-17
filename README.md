# NPM Library for Testing Purposes written in TypeScript

## To Consume & Use
```
    npm init -y
    npm install @cheelim1/typescript-sdk-demo2
```

### Add index.ts file & add below code
```
    import {multiply} from '@cheelim1/typescript-sdk-demo2';
    let x = multiply(2,3);
    console.log(x);
```

### Run index.js
```
    npx tsc index.ts | node index.js
```
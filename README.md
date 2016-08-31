Repro for `hapi-require-https` erroring when there are multiple connections. See [bendrucker/hapi-require-https#17](https://github.com/bendrucker/hapi-require-https/issues/17).

# Instructions:

```sh
git clone {{this repo}}
cd {{this repo dir}}
npm i
npm run repro
```

# Expected result:

No error.

# Actual result:

Error:

```
Debug: internal, implementation, error
    TypeError: Uncaught error: Cannot read property 'protocol' of null
```

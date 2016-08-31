Repro for `hapi-require-https` erroring when there are multiple connections.

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

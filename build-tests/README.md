# Test Build

This directory contains tests that is to be ran manually. 

1: Setup Environment Variables

```
export TEXT_CUSTOM_FIELD_GID=<YOUR_TEXT_CUSTOM_FIELD_GID> -> NOTE: make sure that there is at least one task that has this custom field and the value of the custom field on that task is `custom_value`
export USER_GID=<YOUR_USER_GID>
export WORKSPACE_GID=<YOUR_WORKSPACE_GID>
```

2: Install dependencies: `npm i`

3: Run tests: `npm run  testbuild`

TIP: to debug, add `debugger;` to the location of the test code you want to debug and re-run `npm run  testbuild`
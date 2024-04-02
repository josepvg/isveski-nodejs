# IsveskiDemo_NodeJS


## Installation


```bash

We generated the servercode using the following command:
openapi-generator-cli generate -i https://isveski.is/swagger/clientserver/swagger.json -g typescript-node -o servercode

openapi-generator-cli generate -i https://isveski.is/swagger/client/swagger.json -g typescript-node -o clientcode

openapi-generator-cli generate -i https://f64wsxgs-5064.euw.devtunnels.ms/swagger/client/swagger.json -g typescript-fetch -o clientcode -legacyDiscriminatorBehavior false
```bash

## Debugging
To be able to debug the server, it's handy to install ngrok
ngrok http 1337

```bash

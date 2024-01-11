## Prototypes for workflow

- Package name: crm-prototypes
- Install:

```bash
yarn add crm-prototypes
```

#### Build protobuf to ts:

```bash
# Clearly
source run.sh
# Easier
./run.sh
# Don't have permission?
chmod +x run.sh
```

#### Formatter common type for dev and format response, observable ..

```js
import Response from "crm-prototypes"; // Example
```

#### Service

##### GRPC Config:

```typescript
// Server
app.connectMicroservice<MicroserviceOptions>({
  transport: Transport.GRPC,
  options: {
    url: process.env.NODE_ENV !== "local" ? "0.0.0.0:50051" : "localhost:5000",
    package: ["<package_name>"],
    protoPath: ["node_module/crm-prototypes/interfaces/<package_name>.proto"],
    maxReceiveMessageLength: 1024 * 1024 * 1024,
    maxSendMessageLength: 1024 * 1024 * 1024,
  },
});
// Client
@Client({
    transport: Transport.GRPC,
    options: {
      url: process.env.<GRPC_ENV>,
      package: '<package_name>',
      protoPath: 'node_modules/crm-prototypes/interfaces/<package_name>.proto',
      maxReceiveMessageLength: 1024 * 1024 * 1024,
      maxSendMessageLength: 1024 * 1024 * 1024,
    },
  })
private client: ClientGrpc;
```

### Type script
```ts
// Define package
export * as Storage from './gen/ts/interfaces/storage';

import Storage from 'crm-prototypes' // replace with your define
// Example type:
Storage.IStorageController
```
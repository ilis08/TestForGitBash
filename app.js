const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = __dirname + "/greet.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH);

const greeter = grpc.loadPackageDefinition(packageDefinition).greet;

const stub = new greeter.Greeter('localhost:5039', grpc.credentials.createInsecure());

stub.sayHello({}, (err, res) => {
    console.log(res);
});

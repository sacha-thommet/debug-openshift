var _a;
const express = require('express');
const app = express();
const port = (_a = process.env.port) !== null && _a !== void 0 ? _a : 3000;
app.get('/', (req, res) => {
    const data = {
        container: getContainerInformation(),
        pod: getPodInformation(),
        node: getNodeInformation()
    };
    res.send(data);
});
app.listen(port, () => {
    console.log(`Debug openshift app listening on port ${port}`);
});
function getContainerInformation() {
    var _a, _b, _c, _d;
    const CPU_REQUEST = (_a = process.env.CPU_REQUEST) !== null && _a !== void 0 ? _a : 'unknown';
    const CPU_LIMIT = (_b = process.env.CPU_LIMIT) !== null && _b !== void 0 ? _b : 'unknown';
    const MEM_REQUEST = (_c = process.env.MEM_REQUEST) !== null && _c !== void 0 ? _c : 'unknown';
    const MEM_LIMIT = (_d = process.env.MEM_LIMIT) !== null && _d !== void 0 ? _d : 'unknown';
    return {
        cpu_request: CPU_REQUEST,
        cpu_limit: CPU_LIMIT,
        mem_request: MEM_REQUEST,
        mem_limit: MEM_LIMIT
    };
}
function getPodInformation() {
    var _a, _b, _c;
    const POD_NAME = (_a = process.env.POD_NAME) !== null && _a !== void 0 ? _a : 'unknown';
    const POD_NAMESPACE = (_b = process.env.POD_NAMESPACE) !== null && _b !== void 0 ? _b : 'unknown';
    const POD_IP = (_c = process.env.POD_IP) !== null && _c !== void 0 ? _c : 'unknown';
    return {
        pod_name: POD_NAME,
        pod_namespace: POD_NAMESPACE,
        pod_ip: POD_IP
    };
}
function getNodeInformation() {
    var _a;
    const NODE_NAME = (_a = process.env.NODE_NAME) !== null && _a !== void 0 ? _a : 'unknown';
    return {
        node_name: NODE_NAME,
    };
}

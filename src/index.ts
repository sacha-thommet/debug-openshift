const express = require('express');
const app = express();
const port = process.env.port ?? 3000;

app.get('/', (req, res) => {
  const data = {
    container: getContainerInformation(),
    pod: getPodInformation(),
    node: getNodeInformation()
  }

  res.send(data)
})

app.listen(port, () => {
  console.log(`Debug openshift app listening on port ${port}`)
})

function getContainerInformation(): object {
  const CPU_REQUEST = process.env.CPU_REQUEST ?? 'unknown';
  const CPU_LIMIT = process.env.CPU_LIMIT ?? 'unknown';
  const MEM_REQUEST = process.env.MEM_REQUEST ?? 'unknown';
  const MEM_LIMIT = process.env.MEM_LIMIT ?? 'unknown';

  return {
    cpu_request: CPU_REQUEST,
    cpu_limit: CPU_LIMIT,
    mem_request: MEM_REQUEST,
    mem_limit: MEM_LIMIT
  }
}

function getPodInformation(): object {
  const POD_NAME = process.env.POD_NAME ?? 'unknown';
  const POD_NAMESPACE = process.env.POD_NAMESPACE ?? 'unknown';
  const POD_IP = process.env.POD_IP ?? 'unknown';

  return {
    pod_name: POD_NAME,
    pod_namespace: POD_NAMESPACE,
    pod_ip: POD_IP
  }
}

function getNodeInformation(): object {
  const NODE_NAME = process.env.NODE_NAME ?? 'unknown';

  return {
    node_name: NODE_NAME,
  }
}
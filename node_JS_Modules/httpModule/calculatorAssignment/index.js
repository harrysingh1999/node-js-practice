import http from 'http';
import { requestHandler } from './requestHandler.js';

const calculatorServer = http.createServer(requestHandler)

calculatorServer.listen(3001)
Request:

curl https://api.openai.com/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -d '{
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Hello!"}]
  }

Response:

{
  "id": "chatcmpl-7S2SK4aC19VO30p7b5iQ61uOKUcgS",
  "object": "chat.completion",
  "created": 1686916980,
  "model": "gpt-3.5-turbo-0301",
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 10,
    "total_tokens": 20
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Hi there! How may I assist you today?"
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}



{
  status: 200,
  statusText: 'OK',
  headers: {
    date: 'Sun, 18 Jun 2023 19:39:06 GMT',
    'content-type': 'application/json',
    'content-length': '534',
    connection: 'close',
    'access-control-allow-origin': '*',
    'cache-control': 'no-cache, must-revalidate',
    'openai-model': 'gpt-3.5-turbo-0301',
    'openai-organization': 'user-ciaofo0hjlad1k0nyh8juw5w',
    'openai-processing-ms': '2344',
    'openai-version': '2020-10-01',
    'strict-transport-security': 'max-age=15724800; includeSubDomains',
    'x-ratelimit-limit-requests': '3500',
    'x-ratelimit-limit-tokens': '90000',
    'x-ratelimit-remaining-requests': '3499',
    'x-ratelimit-remaining-tokens': '89983',
    'x-ratelimit-reset-requests': '17ms',
    'x-ratelimit-reset-tokens': '11ms',
    'x-request-id': '0e3094bc7de408ccaaeaf935ffe2f1ff',
    'cf-cache-status': 'DYNAMIC',
    server: 'cloudflare',
    'cf-ray': '7d95ff03fa73bf65-WAW',
    'alt-svc': 'h3=":443"; ma=86400'
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: [Function: httpAdapter],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: [Function: validateStatus],
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'User-Agent': 'OpenAI/NodeJS/3.2.1',
      Authorization: 'Bearer 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',
      'Content-Length': 69
    },
    method: 'post',
    data: '{"model":"gpt-3.5-turbo","messages":[{"role":"system","content":""}]}',
    url: 'https://api.openai.com/v1/chat/completions'
  },
  request: <ref *1> ClientRequest {
    _events: [Object: null prototype] {
      abort: [Function (anonymous)],
      aborted: [Function (anonymous)],
      connect: [Function (anonymous)],
      error: [Function (anonymous)],
      socket: [Function (anonymous)],
      timeout: [Function (anonymous)],
      finish: [Function: requestOnFinish]
    },
    _eventsCount: 7,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: false,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: true,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: 69,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    _closed: false,
    socket: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      secureConnecting: false,
      _SNICallback: null,
      servername: 'api.openai.com',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 10,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'api.openai.com',
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: [TLSWrap],
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: null,
      _httpMessage: [Circular *1],
      [Symbol(res)]: [TLSWrap],
      [Symbol(verified)]: true,
      [Symbol(pendingSession)]: null,
      [Symbol(async_id_symbol)]: 163,
      [Symbol(kHandle)]: [TLSWrap],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: false,
      [Symbol(kSetKeepAlive)]: true,
      [Symbol(kSetKeepAliveInitialDelay)]: 60,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(connect-options)]: [Object]
    },
    _header: 'POST /v1/chat/completions HTTP/1.1\r\n' +
      'Accept: application/json, text/plain, */*\r\n' +
      'Content-Type: application/json\r\n' +
      'User-Agent: OpenAI/NodeJS/3.2.1\r\n' +
      'Authorization: Bearer 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\r\n' +
      'Content-Length: 69\r\n' +
      'Host: api.openai.com\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: nop],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype],
      freeSockets: [Object: null prototype] {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'POST',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    joinDuplicateHeaders: undefined,
    path: '/v1/chat/completions',
    _ended: true,
    res: IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: [TLSSocket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      joinDuplicateHeaders: undefined,
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [TLSSocket],
      _consuming: false,
      _dumped: false,
      req: [Circular *1],
      responseUrl: 'https://api.openai.com/v1/chat/completions',
      redirects: [],
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 44,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: 'api.openai.com',
    protocol: 'https:',
    _redirectable: Writable {
      _writableState: [WritableState],
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      _options: [Object],
      _ended: true,
      _ending: true,
      _redirectCount: 0,
      _redirects: [],
      _requestBodyLength: 69,
      _requestBodyBuffers: [],
      _onNativeResponse: [Function (anonymous)],
      _currentRequest: [Circular *1],
      _currentUrl: 'https://api.openai.com/v1/chat/completions',
      [Symbol(kCapture)]: false
    },
    [Symbol(kCapture)]: false,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      accept: [Array],
      'content-type': [Array],
      'user-agent': [Array],
      authorization: [Array],
      'content-length': [Array],
      host: [Array]
    },
    [Symbol(errored)]: null,
    [Symbol(kUniqueHeaders)]: null
  },
  data: {
    id: 'chatcmpl-7SsWmfGDXusGGSTJmdH41BUxKcoAE',
    object: 'chat.completion',
    created: 1687117144,
    model: 'gpt-3.5-turbo-0301',
    usage: { prompt_tokens: 8, completion_tokens: 28, total_tokens: 36 },
    choices: [ [Object] ]
  }
}
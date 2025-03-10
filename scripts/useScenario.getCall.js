import { sleep, check } from 'k6'
import http, { get } from 'k6/http'

const getPublicCrocodilesUrl = 'https://test-api.k6.io/public/crocodiles/';

export const options = {
  cloud: {
    // Which server to use?
    distribution: { 'amazon:gb:london': { loadZone: 'amazon:gb:london', percent: 100 } },
    apm: [],
    //project id not provided, hence the test goes under default project
  },
  thresholds: {}, // Set thresholds here like response time to be <=500 ms for 95th percentile
  scenarios: {
    simpleRamp: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 20, duration: '30s' },
        { target: 20, duration: '3m' },
        { target: 0, duration: '30s' },
      ],
      gracefulRampDown: '30s',
      exec: 'ramp1',
    },
  },
}

export function ramp1() {
  let response

  // Built using K6's UI
  response = http.get(getPublicCrocodilesUrl);
  check(response, { 'status equals 200': response => response.status.toString() === '200' })
  sleep(1)
}

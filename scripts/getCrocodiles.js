import { check } from 'k6';
import http from 'k6/http';

export let options = {
  // 10 virtual users calls for 60s
  vus: 10,
  duration: '60s',

  // In case you want to run the test in the cloud
  cloud: {
    projectID: 3753303, // my project Id under which the test will be run
    name: 'Test (10/03/2025-10:05:00)' // test id to group multiple tests runs under
  }
};  

export default function () {
  const getPublicCrocodilesUrl = 'https://test-api.k6.io/public/crocodiles/';
  const response = http.get(getPublicCrocodilesUrl);
  check(response, {
    'status is 200': (response) => response.status === 200,
  });
}
# Performance-testing-with-k6
Contains some sample scripts for performance testing
These scripts uses basic public APIs but can be replaced by any API we need.

**Install k6 to run tests(scripts) on local or on cloud.**
**Run command 'k6 --version' to verify k6 is installed.**

**Steps to run the scripts locally:**
1. Run command 'k6 run scripts/<fileName>'

**Steps to run the scripts on grafana cloud:**
1. Create an account in grafana.
2. Copy personal API key from granfana.
    1. Clicking 'Testing & Synthetics' in the left navigation bar.
    2. Select 'Performance' -> 'Settings'
    3. API key can be found in 'Personal API Key' tab.
3. Run command 'k6 cloud login --token <APIKEY>', notice the logged in successfully message.
4. Run command 'k6 cloud scripts/<fileName>'
    The script now runs on the grafana cloud.
5. View the test execution and test results on grafana dashboard.


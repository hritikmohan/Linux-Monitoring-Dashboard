// networkUsage.js
const fs = require('fs');

// Function to Get Real-Time Network Data
const getNetworkUsage = () => {
  const data = fs.readFileSync('/proc/net/dev', 'utf8');
  const lines = data.trim().split('\n').slice(2); // Skip the header lines
  const netData = lines.map(line => {
    const [interfaceName, rxBytes, , , , , , , txBytes] = line.trim().split(/\s+/);
    return { interfaceName, rxBytes: parseInt(rxBytes, 10), txBytes: parseInt(txBytes, 10) };
  });
  return netData;
};

module.exports = { getNetworkUsage };

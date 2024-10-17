// diskUsage.js
const { exec } = require('child_process');

// Function to Get Disk Usage
const getDiskUsage = (callback) => {
  exec('df -h --output=source,pcent | grep "^/dev/"', (error, stdout, stderr) => {
    if (error || stderr) {
      console.error('Error getting disk usage:', error || stderr);
      callback([]);
      return;
    }

    const lines = stdout.trim().split('\n');
    const usageData = lines.map(line => {
      const [filesystem, percent] = line.split(/\s+/);
      return { filesystem, percent: parseInt(percent.replace('%', ''), 10) };
    });
    callback(usageData);
  });
};

module.exports = { getDiskUsage };

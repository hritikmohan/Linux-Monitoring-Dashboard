const os = require('os');

// Helper function to convert bytes to human-readable format
const formatBytes = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Bytes';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

// Function to Get Memory Usage with units
const getMemUsage = () => {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;

  const usedPercent = (usedMem / totalMem) * 100;

  return {
    used: formatBytes(usedMem),
    total: formatBytes(totalMem),
    percent: usedPercent.toFixed(2),
  };
};

module.exports = { getMemUsage };

const os = require('os');

// Function to calculate CPU usage
let previousIdle = 0;
let previousTotal = 0;

const getCpuUsage = () => {
  const cpus = os.cpus();
  let idle = 0;
  let total = 0;

  cpus.forEach((core) => {
    for (const type in core.times) {
      total += core.times[type];
    }
    idle += core.times.idle;
  });

  const idleDelta = idle - previousIdle;
  const totalDelta = total - previousTotal;
  const usagePercent = 100 - Math.floor((idleDelta / totalDelta) * 100);

  previousIdle = idle;
  previousTotal = total;

  return usagePercent;
};

module.exports = { getCpuUsage };

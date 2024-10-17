// monitor.js

const blessed = require('blessed');
const contrib = require('blessed-contrib');
const { getCpuUsage } = require('./usageData/cpuUsage.js');
const { getMemUsage } = require('./usageData/memUsage.js');
const { getDiskUsage } = require('./usageData/diskUsage.js');
const { getNetworkUsage } = require('./usageData/networkUsage.js');

// Create a screen object
const screen = blessed.screen();
const grid = new contrib.grid({ rows: 12, cols: 12, screen: screen });

// CPU Line Chart
const cpuChart = grid.set(0, 0, 4, 12, contrib.line, {
  showNthLabel: 5,
  maxY: 100,
  label: 'CPU Usage (%)',
  showLegend: true,
  legend: { width: 10 },
});

// Memory Bar Chart
const memBar = grid.set(4, 0, 4, 6, contrib.bar, {
  label: 'Memory Usage (%)',
  barWidth: 4,
  barSpacing: 6,
  xOffset: 0,
  maxHeight: 100,
});

// Network Table
const netTable = grid.set(4, 6, 4, 6, contrib.table, {
  keys: true,
  label: 'Network Interfaces',
  columnWidth: [20, 30],
});

// Disk Usage Bar Chart
const diskBar = grid.set(8, 0, 4, 12, contrib.bar, {
  label: 'Disk Usage',
  barWidth: 4,
  barSpacing: 6,
  xOffset: 0,
  maxHeight: 100,
});

// Function to Update Dashboard Stats
const updateStats = () => {
  const cpuPercent = getCpuUsage();
  const memStats = getMemUsage();
  // Update CPU Line Chart
  cpuChart.setData([{ title: 'CPU', x: [...Array(10).keys()], y: [...Array(10).fill(cpuPercent)] }]);

  // Update Memory Bar Chart
  memBar.setData({
    titles: ['Used', 'Free'],
    data: [memStats.percent, (100 - memStats.percent)],
  });

  // Update Network Table with real-time data
  const netUsage = getNetworkUsage();
  const netData = netUsage.map(iface => [iface.interfaceName, `RX: ${iface.rxBytes} TX: ${iface.txBytes}`]);
  netTable.setData({ headers: ['Interface', 'Activity'], data: netData });

  // Update Disk Usage Bar Chart with real data
  getDiskUsage(diskUsageData => {
    const titles = diskUsageData.map(disk => disk.filesystem);
    const data = diskUsageData.map(disk => disk.percent);
    diskBar.setData({ titles, data });
  });

  screen.render();
};

// Update stats every second
setInterval(updateStats, 1000);

// Allow user to quit
screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0));

// Render the screen
screen.render();

# Linux Server Monitoring Dashboard

## Overview
The **Linux Server Monitoring Dashboard** is a terminal-based application built with Node.js that provides real-time monitoring of CPU, memory, disk, and network usage on a Linux server. Inspired by the `Btop` utility, this dashboard gives users a visual representation of system resource utilization directly in the terminal.

## Features
- Real-time CPU usage monitoring
- Memory usage statistics with units
- Disk usage visualization
- Network interface statistics
- Terminal-based UI for quick access to system metrics

## Prerequisites
- Node.js (version 12 or higher)
- NPM (Node Package Manager)

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/linux-monitoring-dashboard.git
   cd linux-monitoring-dashboard
2. **Install Dependencies:**
   ```bash
   npm install

## Usage
To run the monitoring dashboard, use the following command:
```bash
npm run dev
```

## Dashboard Layout
- **CPU Usage:** Displays CPU usage percentage over time.
- **Memory Usage:** Shows the percentage of used memory along with the total memory in GB/MB.
- **Disk Usage:** Visualizes disk usage for mounted filesystems.
- **Network Interfaces:** Displays real-time data on network interface activity.

## Controls
- Press `Esc`, `q`, or `Ctrl+C` to exit the application.

## Code Structure
The project is structured into separate files for better organization:
- `monitor.js`: Main application file that initializes the dashboard.
- `cpuUsage.js`: Fetches and calculates CPU usage.
- `memUsage.js`: Fetches and calculates memory usage (with units).
- `diskUsage.js`: Fetches disk usage statistics.
- `networkUsage.js`: Fetches real-time network interface data.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## Acknowledgements
- [Node.js](https://nodejs.org/) for the JavaScript runtime.
- [Blessed](https://github.com/chjj/blessed) and [Blessed-Contrib](https://github.com/yaronn/blessed-contrib) for creating the terminal UI components.
- Inspiration from various system monitoring tools like `htop` and `Btop`.

## Contact
For any inquiries, please reach out to [hhritikmohan@gmail.com](mailto:hhritikmohan@gmail.com).

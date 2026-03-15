# MPU6050 Web Dashboard & 3D Simulator

A real-time **MPU6050 sensor dashboard and 3D simulator** that visualizes motion data in a web interface.
The system streams sensor data from a microcontroller (Arduino / ESP32) via **USB Serial or WiFi** and renders the orientation in **3D using Three.js**.

This project is inspired by flight controller tools such as **MultiWii Configurator** and drone attitude simulators.

---

## Features

* Real-time **MPU6050 sensor streaming**
* **3D motion visualization**
* USB Serial communication
* WebSocket real-time updates
* Lightweight Node.js backend
* Modular architecture for easy expansion
* Compatible with **Arduino and ESP32**

Future planned features:

* Roll / Pitch / Yaw calculation
* Sensor graphs (accelerometer + gyroscope)
* Drone 3D model visualization
* Sensor calibration tools
* Data recording
* ESP32 WiFi streaming

---

## System Architecture

```
MPU6050 Sensor
       │
       ▼
Microcontroller (Arduino / ESP32)
       │
       ├── USB Serial
       │
       ▼
Node.js Server
       │
       ▼
WebSocket
       │
       ▼
Web Dashboard (Three.js 3D Simulator)
```

---

## Project Structure

```
Drone-IMU-Simulator/
│
├── package.json
├── server.js
├── serial.js
├── websocket.js
│
├── public/
│   ├── index.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── main.js
│       ├── websocket.js
│       └── threeScene.js
│
└── README.md
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/dani-dina/Drone-IMU-Simulator-.git
cd Drone-IMU-Simulator
```

### 2. Install dependencies

```
npm install
```

### 3. Run the server

```
node server.js
```

### 4. Open the dashboard

```
http://localhost:3000
```

---

## Arduino / ESP32 Data Format

The microcontroller should send sensor data in CSV format:

```
ax,ay,az,gx,gy,gz
```

Example:

```
120,-340,980,12,3,-4
```

---

## Hardware Setup

### MPU6050 Wiring

| MPU6050 | ESP32  |
| ------- | ------ |
| VCC     | 3.3V   |
| GND     | GND    |
| SDA     | GPIO21 |
| SCL     | GPIO22 |

---

## Technologies Used

Backend

* Node.js
* Express
* WebSocket
* SerialPort

Frontend

* JavaScript
* Three.js
* WebGL
* HTML5 / CSS3

Hardware

* MPU6050
* Arduino / ESP32

---

## Use Cases

* Drone orientation simulation
* Robotics motion visualization
* Sensor data monitoring
* Embedded systems debugging
* Educational projects

---

## Author

Daniel Abera
Software Developer | Embedded Systems | Security Researcher

GitHub: https://github.com/dani-dina

---

## License

MIT License

import { SerialPort } from "serialport";

export function startSerial(callback) {

  const port = new SerialPort({
    path: "COM3",   
    baudRate: 115200
  });

  port.on("data", (data) => {
    const message = data.toString().trim();
    callback(message);
  });

  console.log("Serial started");
}
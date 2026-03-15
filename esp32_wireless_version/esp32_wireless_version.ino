#include <WiFi.h>
#include <Wire.h>
#include <MPU6050.h>
#include <WebSocketsServer.h>

const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASSWORD";

MPU6050 mpu;

WebSocketsServer webSocket = WebSocketsServer(81);

int16_t ax, ay, az;
int16_t gx, gy, gz;

void setup() {

  Serial.begin(115200);

  Wire.begin(21, 22);

  mpu.initialize();

  WiFi.begin(ssid, password);

  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");

  Serial.println(WiFi.localIP());

  webSocket.begin();
}

void loop() {

  webSocket.loop();

  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);

  String data =
    String(ax) + "," +
    String(ay) + "," +
    String(az) + "," +
    String(gx) + "," +
    String(gy) + "," +
    String(gz);

  webSocket.broadcastTXT(data);

  delay(20);
}

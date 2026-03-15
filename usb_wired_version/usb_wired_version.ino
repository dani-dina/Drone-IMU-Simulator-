#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

int16_t ax, ay, az;
int16_t gx, gy, gz;

void setup() {

  Serial.begin(115200);
  Wire.begin();

  mpu.initialize();

  // Optional: wait until MPU is ready
  if (!mpu.testConnection()) {
    while (1); // stop if sensor not detected
  }
}

void loop() {

  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);

  // Send CSV line (important: ONE line per sample)
  Serial.print(ax); Serial.print(",");
  Serial.print(ay); Serial.print(",");
  Serial.print(az); Serial.print(",");
  Serial.print(gx); Serial.print(",");
  Serial.print(gy); Serial.print(",");
  Serial.println(gz);

  delay(20);  // ~50Hz sampling
}

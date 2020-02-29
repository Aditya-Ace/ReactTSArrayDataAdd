import React, { useState } from "react";
import { TextInput } from "./components/TextInput";

interface Device {
  deviceName: string;
  serialNumber: string | number;
}

const App: React.FC = () => {
  const [deviceName, setDeviceName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [deviceInfos, setDeviceInfos] = useState<Device[]>([]);

  const handleDeviceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeviceName(event.target.value);
  };
  const handleSerialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addDevice();
    setDeviceName("");
    setSerialNumber("");
  };

  const addDevice = () => {
    const newDevice: Device[] = [
      ...deviceInfos,
      { deviceName: deviceName, serialNumber: serialNumber }
    ];
    setDeviceInfos(newDevice);
  };
  return (
    <div
      className="App"
      style={{ textAlign: "center", margin: "0 auto", marginTop: "10em" }}
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Add Device Name"
          handleChange={handleDeviceChange}
          value={deviceName}
        />
        <TextInput
          type="text"
          placeholder="Add fuck"
          handleChange={handleSerialChange}
          value={serialNumber}
        />
        <button type="submit">Add</button>
      </form>
      {deviceInfos.map((device, i) => (
        <div key={i}>
          <h3>{device.deviceName}</h3>
          <h3>{device.serialNumber}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;

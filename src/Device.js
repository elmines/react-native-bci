//@flow

import {Observable} from "rxjs";

export type ConnectStatus = "Disconnected" | "Connecting" | "Connected" | "Disconnecting";

//Matches the @neurosity/pipes
export type DataPacket = {
	data: Array<Number>,
	timestamp: Date,
	info?: {
		samplingRate?: number,
		channelNames?: Array<string>
	}
}

export class DeviceManager
{
	getChannelNames(): Array<string> {return []};

	data(): Observable<DataPacket>{return new Observable<DataPacket>();}

	connect(identifier: string): void {};
  startListening(): void {};
	stopListening(): void {}
}

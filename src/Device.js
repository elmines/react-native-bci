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

export interface DeviceManager
{
	getChannelNames(): Array<string>;
	data(): Observable<DataPacket>;

	//An Observable that provides a list of devices every time the number of devices available changes
	devices(): Observable<Array<string>>;

	connect(identifier: string): void;
	startListening(): void;
	stopListening(): void;

}

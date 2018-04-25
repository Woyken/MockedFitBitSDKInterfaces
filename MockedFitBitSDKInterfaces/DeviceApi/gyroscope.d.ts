interface GyroscopeReading extends SensorReading {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}

declare module "gyroscope" {
    class Gyroscope implements Sensor, GyroscopeReading {
        // Sensor implementation
        readonly isactivated: boolean;
        onactivate: (this: Sensor, event: Event) => any;
        onerror: (this: Sensor, event: SensorErrorEvent) => any;
        onreading: (this: Sensor, event: Event) => any;
        addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => any): void;
        start(): void;
        stop(): void;
        // Sensor implementation End
    
        // GyroscopeReading implementation End
        readonly timestamp: number | null;
        readonly x: number | null;
        readonly y: number | null;
        readonly z: number | null;
        // GyroscopeReading implementation End
    
        /**
         * constructor for Gyroscope.
         * @param options Optional SensorOptions to create sensor with. Ex. { frequency: 100 }.
         */
        constructor (options?: SensorOptions);
    
        //private readonly readings: GyroscopeReading | undefined;
    }
}
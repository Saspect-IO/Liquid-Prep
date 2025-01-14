import { SoilMoisture } from './SoilMoisture';
import {Stage} from './Crop';

export class Advice {
    id: string;
    cropName: string;
    stage: Stage;
    waterRecommended: number;
    temperature: number;
    rainfallPercentage: number;
    rainfallIndex: string;
    wateringDecision: string;
    soilMoistureReading: SoilMoisture;
    imageUrl: string;
}

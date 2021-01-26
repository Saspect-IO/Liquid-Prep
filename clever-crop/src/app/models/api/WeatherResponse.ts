import { BaseResponse } from './BaseResponse';

export class Daypart {
  cloudCover: number[];
  dayOrNight: string[];
  daypartName: string[];
  iconCode: number[];
  iconCodeExtend: number[];
  narrative: string[];
  precipChance: number[];
  precipType: string[];
  qpf: number[];
  qpfSnow: number[];
  qualifierCode: any[];
  qualifierPhrase: any[];
  relativeHumidity: number[];
  snowRange: string[];
  temperature: number[];
  temperatureHeatIndex: number[];
  temperatureWindChill: number[];
  thunderCategory: string[];
  thunderIndex: number[];
  uvDescription: string[];
  uvIndex: number[];
  windDirection: number[];
  windDirectionCardinal: string[];
  windPhrase: string[];
  windSpeed: number[];
  wxPhraseLong: string[];
  wxPhraseShort: string[];
}

export class Data {
  dayOfWeek: string[];
  narrative: string[];
  sunriseTimeLocal: Date[];
  sunsetTimeLocal: Date[];
  temperatureMax: number[];
  temperatureMin: number[];
  daypart: Daypart[];
}

export class WeatherResponse extends BaseResponse {
  data: Data;
}

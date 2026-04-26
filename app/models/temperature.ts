export type CelsiusModel = {
    unit: "Celsius";
    symbol: "°C";
    value: number;
    formula: string;
}

export type FahrenheitModel = {
  unit: "Fahrenheit";
  symbol: "°F";
  value: number;
  formula: string;
};

export type KelvinModel = {
  unit: "Kelvin";
  symbol: "K";
  value: number;
  formula: string;
};

export type TemperatureModel = CelsiusModel | FahrenheitModel | KelvinModel;

export function buildAllModels(celsius: number): TemperatureModel[] {
  return [
    { unit: "Celsius",    symbol: "°C", value: celsius,                    formula: "Valor base"     },
    { unit: "Fahrenheit", symbol: "°F", value: (celsius * 9) / 5 + 32,    formula: "(°C * 9/5) + 32" },
    { unit: "Kelvin",     symbol: "K",  value: celsius + 273.15,           formula: "°C + 273.15"    },
  ];
}
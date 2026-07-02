import { IDataProvider } from "./IDataProvider";
import { MockProvider } from "./MockProvider";

export type ProviderType =
  | "mock"
  | "binance"
  | "yahoo"
  | "tsetmc";

export function createProvider(
  provider: ProviderType
): IDataProvider {

  switch (provider) {

    case "mock":
      return new MockProvider();

    case "binance":
      throw new Error(
        "BinanceProvider not implemented yet."
      );

    case "yahoo":
      throw new Error(
        "YahooProvider not implemented yet."
      );

    case "tsetmc":
      throw new Error(
        "TSETMCProvider not implemented yet."
      );

    default:
      throw new Error(
        "Unknown provider."
      );
  }
}
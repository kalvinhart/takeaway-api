import { registerAs } from "@nestjs/config";
import { Config } from "./enums/Config";

export class BaseConfig {
  port: number;
}

export default registerAs(
  Config.BASE,
  (): BaseConfig => ({
    port: parseInt(process.env.PORT) || 8083,
  })
);

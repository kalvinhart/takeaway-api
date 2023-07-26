import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CoreModule } from "./modules/core/core.module";
import baseConfig from "./config/base.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [baseConfig],
      isGlobal: true,
    }),
    CoreModule,
  ],
})
export class AppModule {}

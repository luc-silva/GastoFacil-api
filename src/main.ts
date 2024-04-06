import { NestFactory } from "@nestjs/core";
import { GastoFacilModule } from "./GastoFacilModule";

async function bootstrap() {
    const app = await NestFactory.create(GastoFacilModule);

    app.listen(6060);
}

bootstrap();

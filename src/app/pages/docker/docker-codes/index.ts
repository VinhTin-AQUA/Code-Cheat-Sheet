import { loginCodes } from "./login.codes";
import { containerCommandCodes } from "./container.codes";
import { imageCommandCodes } from "./image.codes";
import { dockerizeAngular } from "./dockerize-angular,codes";
import { dockercomposeCodes } from "./docker-compose.codes";
import { dockerizeNetCodes } from "./dockerize-net.codes";
import { dockerizeSqlCodes } from "./dockerize-sql.codes";
import { dockerIgnoreCodes } from "./docker-ignore.codes";
import { dockerizeReactCodes } from "./dockerize-react.codes";
import { dockerizeRedisCodes } from "./dockerize-redis.codes";
import { dockerizeNestJsCodes } from "./dockerize-nestjs.codes";
import { addDenpendenciesCodes } from "./add-dependencies.codes";

export const dockerCodes = {
    'image-commands': imageCommandCodes,
    'container-commands': containerCommandCodes,
    'login': loginCodes,
    'docker-compose': dockercomposeCodes,
    'dockerize-angular' : dockerizeAngular,
    'dockerize-netcore' : dockerizeNetCodes,
    'dockerize-sql' : dockerizeSqlCodes,
    'docker-ignore': dockerIgnoreCodes,
    'dockerize-react': dockerizeReactCodes,
    'dockerize-redis': dockerizeRedisCodes,
    'dockerize-nestjs': dockerizeNestJsCodes,
    'add-dependencies': addDenpendenciesCodes,
}
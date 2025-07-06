import { dockerCommandCodes } from "./docker-command.codes";
import { containerCommandCodes } from "./container.codes";
import { imageCommandCodes } from "./image.codes";
import { dockercomposeCodes } from "./docker-compose.codes";
import { dockerIgnoreCodes } from "./docker-ignore.codes";
import { dockerUtilCodes } from "./docker-utils.codes";

export const dockerCodes = {
    'image-commands': imageCommandCodes,
    'container-commands': containerCommandCodes,
    'docker-command': dockerCommandCodes,
    'docker-compose': dockercomposeCodes,
    'docker-ignore': dockerIgnoreCodes,
    'docker-utils': dockerUtilCodes,
}
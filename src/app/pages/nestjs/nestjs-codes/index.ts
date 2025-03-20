import { applyModuleForGlobal } from './apply-module-for-global.codes';
import { callApiBackgroundCodes } from './call-api-background.codes';
import { callApiAxiosCodes } from './call-thirty-api.codes';
import { configEnvCodes } from './config-env.codes';
import { decoratorCodes } from './decorator.codes';
import { docGhiFile } from './doc-ghi-file.codes';
import { globalExceptionDilter } from './global-exception-filter.codes';
import { middlewareCatchAPI } from './middleware-catch-API.codes';
import { nestJSCommandCodes } from './nestjs-commands.codes';

export const nestjsCodes = {
    'ap-dung-global-module': applyModuleForGlobal,
    'decorators': decoratorCodes,
    'doc-ghi-file': docGhiFile,
    'call-thirty-api': callApiAxiosCodes,
    'call-api-duoi-nen': callApiBackgroundCodes,
	'nestjs-commands': nestJSCommandCodes,
    'global-exception-filter': globalExceptionDilter,
    'middleware-catch-api': middlewareCatchAPI,
    'config-env': configEnvCodes,
};

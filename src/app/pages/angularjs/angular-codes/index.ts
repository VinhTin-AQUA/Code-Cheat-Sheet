import { CLICodes } from './cli.codes';
import { directiveCustomCodes } from './directive-custom.codes';
import { echartsAngularCodes } from './echarts-angular.codes';
import { fastCodes } from './fast.codes';
import { guardCodes } from './guard.codes';
import { inputCodes } from './input.codes';
import { interceptorCodes } from './interceptor.codes';
import { jwtDecodeCodes } from './jwt.codes';
import { layoutCodes } from './layout.codes';
import { lifeCycleHook } from './life-cycle-hook.codes';
import { ngSelectCodes } from './ng-select.codes';
import { ngxQuill } from './ngx-quill.codes';
import { pipeCodes } from './pipe.codes';
import { provideConfigCodes } from './provide-config.codes';
import { reactiveFormCodes } from './reactive.form.codes';
import { routingCodes } from './routing.codes';
import { signalStoreCodes } from './signal-store.codes';
import { signalCodes } from './signal.codes';
import { tailwindCodes } from './tailwind-css.codes';
import { techCodes } from './tech.codes';

export const codes = {
	'provide-config': provideConfigCodes,
	'fast-code': fastCodes,
	'directive-custom': directiveCustomCodes,
	'guard': guardCodes,
	'interceptors': interceptorCodes,
	'pipe': pipeCodes,
	'layouts': layoutCodes,
	'techs': techCodes,
	'signalStore': signalStoreCodes,
	'signal': signalCodes,
	'reactive-form': reactiveFormCodes,
	'routing': routingCodes,
	'cli-command': CLICodes,
	'echarts-angular': echartsAngularCodes,
	'jwt-decode': jwtDecodeCodes,
	'ng-select': ngSelectCodes,
	'ngx-quill': ngxQuill,
	'tailwind-css': tailwindCodes,
    'life-cycle-hook': lifeCycleHook,
    'input': inputCodes,
};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// Public API for compiler
export {Compiler, CompilerFactory, CompilerOptions, ComponentStillLoadingError, ModuleWithComponentFactories} from './linker/compiler';
export {ComponentFactory, ComponentRef} from './linker/component_factory';
export {ComponentFactoryResolver, NoComponentFactoryError} from './linker/component_factory_resolver';
export {ComponentResolver} from './linker/component_resolver';
export {DynamicComponentLoader} from './linker/dynamic_component_loader';
export {ElementRef} from './linker/element_ref';
export {ExpressionChangedAfterItHasBeenCheckedException} from './linker/exceptions';
export {NgModuleFactory, NgModuleRef} from './linker/ng_module_factory';
export {NgModuleFactoryLoader} from './linker/ng_module_factory_loader';
export {QueryList} from './linker/query_list';
export {SystemJsNgModuleLoader} from './linker/system_js_ng_module_factory_loader';
export {SystemJsCmpFactoryResolver, SystemJsComponentResolver} from './linker/systemjs_component_resolver';
export {TemplateRef} from './linker/template_ref';
export {ViewContainerRef} from './linker/view_container_ref';
export {EmbeddedViewRef, ViewRef} from './linker/view_ref';

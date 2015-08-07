import {
  implComponentConstructor, safeBuilder, safeHandler
} from 'quiver-component-util'

import {
  HandleableBuilder, HandleableMiddleware
} from 'quiver-component-base'

export const handleableBuilder = implComponentConstructor(
  HandleableBuilder, 'mainHandleableBuilderFn', safeHandler)

export const handleableMiddleware = implComponentConstructor(
  HandleableMiddleware, 'mainHandleableMiddlewareFn', safeHandler)

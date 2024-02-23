import { Application, Router } from 'express'
import { HealthRouter } from './health'
import { UserRouter } from './userRoutes'
import { CarRouter } from './carRoutes'

const _routes: Array<[string, Router]> = [
  ['/', HealthRouter],
  ['/', UserRouter],
  ['/', CarRouter]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

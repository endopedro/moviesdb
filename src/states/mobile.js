import { entity } from 'simpler-state'

export const mobile = entity(false)

export const setMobile = (val) => mobile.set(val)

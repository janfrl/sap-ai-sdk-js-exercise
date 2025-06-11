import { configs } from '../utils/configs'

export default defineEventHandler(() => configs.map(c => c.name))

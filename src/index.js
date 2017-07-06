import { start } from 'plait'
import * as Counter from './counter'

const appNode = start(Counter)

document.getElementById('app').appendChild(appNode)

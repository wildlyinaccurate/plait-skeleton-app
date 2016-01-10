import { App } from 'plait'
import * as Counter from 'Counter'

const appNode = App.start(Counter)

document.getElementById('app').appendChild(appNode)

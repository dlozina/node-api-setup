import { agent as _request } from "supertest"
import {get as getApplication} from '../src/app'

export const request = _request(getApplication())
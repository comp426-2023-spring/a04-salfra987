#!/usr/bin/env node

//IMPORT
import express from "express"
import minimist from "minimist"
import { rps, rpsls } from "./lib/rpsls.js

//VARIABLE
var argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;
const app = express();



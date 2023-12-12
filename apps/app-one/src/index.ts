#!/usr/bin/env node
import 'dotenv/config';
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import {StackOne} from 'sample1';
import {StackTwo} from "sample2";

const app = new App();
new StackOne(app, {});
new StackTwo(app, {});

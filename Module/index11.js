//import { Robot1 } from "./Robot1"; // before using default key word

import Robot1 from "./Robot1"; // after using defauly key word

import Robot1, {promoting} from "./Robot1"; // importing class and functions together like react
import React, {Component} from 'react';


//import {promoting} from "./Robot1";

const voltron1 = new Robot1("Text","Metal"); 
voltron1.action1();
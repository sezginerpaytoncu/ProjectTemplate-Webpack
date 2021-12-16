// alert("Hello from Webpack!!!");
import { run } from "./app/app";
import { AService } from "./app/a.service";
import { BService } from "./app/b.service";
const aService = new AService();
const bService = new BService();
run(bService, aService);
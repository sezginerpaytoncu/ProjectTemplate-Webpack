// This was the main JS file before webpack...
import { AService } from "./a.service";
import { BService } from "./b.service";

export const run = (aService, bService)=>{
    alert("Run! (app.js)");
}

// const aService = new AService();
// const bService = new BService();
// run(bService, aService);
import { Controller, Get, ParseIntPipe, Query } from "@nestjs/common";
import { IndexService } from "../src/index.service";

@Controller("index")
export class IndexController {
    constructor(
        private readonly indexService: IndexService
    ) { }

    @Get()
    GetMainIndex() {
        return this.indexService.GetIndex();
    }

    @Get("/search")
    GetIndex(
        @Query("dirPage", ParseIntPipe) dirPage: number,
        @Query("filePage", ParseIntPipe) filePage: number) {
        return this.indexService.GetIndex(dirPage, filePage);
    }

}

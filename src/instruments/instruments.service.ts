import { Injectable } from "@nestjs/common";
import { DbService } from "src/common/infra/db/db.service";

@Injectable()
export class InstrumentsService {
    constructor(private readonly db: DbService) {}

  async searchInstruments(query: string, page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    const take = pageSize;
  
    const [items, total] = await this.db.$transaction([
      this.db.instruments.findMany({
        where: {
          OR: [
            { ticker: { contains: query, mode: 'insensitive' } },
            { name: { contains: query, mode: 'insensitive' } },
          ],
        },
        skip,
        take,
      }),
      this.db.instruments.count({
        where: {
          OR: [
            { ticker: { contains: query, mode: 'insensitive' } },
            { name: { contains: query, mode: 'insensitive' } },
          ],
        },
      }),
    ]);
  
    const totalPages = Math.ceil(total / pageSize);
  
    return {
      data: items,
      meta: {
        page,
        pageSize,
        totalItems: total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    };
  }
  
}
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { PlaceOrderData } from "./dtos/place-order.dto";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { orders } from "@prisma/client";
import { PlaceOrderResponse } from "./dtos/place-order-response.dto";

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PlaceOrderResponse })
    async placeOrder(@Body() order: PlaceOrderData): Promise<PlaceOrderResponse> {
        const orderResponse = await this.ordersService.placeOrder(order);
        return {
            id: orderResponse.id,
            instrumentid: orderResponse.instrumentid,
            userid: orderResponse.userid,
            status: orderResponse.status,
            type: orderResponse.type,
            side: orderResponse.side,
            size: orderResponse.size,
            price: orderResponse.price?.toNumber(),
            datetime: orderResponse.datetime?.toISOString(),
        };
    }
}
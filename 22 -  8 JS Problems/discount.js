function discountPrice(ticketQuantity){
    const first100Price = 100;
    const second100Price = 90;
    const restTicketPrice = 70;

    if(ticketQuantity <= 100){
        const totalPrice = ticketQuantity * first100Price;
        return totalPrice;
    } else if( ticketQuantity <= 200){
        const firstPrice = 100 * first100Price;
        const restTicket = ticketQuantity - 100;
        const totalPrice = (restTicket * second100Price) + firstPrice;
        return totalPrice
    } else{
        const firstPrice = 100 * first100Price;
        const secondPrice = 100 * second100Price;
        const restTicket = ticketQuantity - 200;
        const totalPrice = (restTicket* restTicketPrice) + firstPrice + secondPrice;
        return totalPrice;
    }
}

const totalCost = discountPrice(220);
console.log(totalCost)
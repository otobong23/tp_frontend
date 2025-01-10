export type Response_success = {
    success: true,
    message: "Deposit has been made successfully",
    newTransaction: {
        userId: string,
        amount: number,
        blockchain: "USDT",
        type: "credit",
        status: "completed",
        description: "Account Deposit",
        _id: string,
        createdAt: string,
        updatedAt: string,
        __v: number
    }
}
export type Response_failure = {
    success: false,
    message: 'Failed to fetch Ethereum transactions.'
}
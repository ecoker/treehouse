export const customer = (data) => {
    /*
    // EMPTY STRING FORCES UPDATES TO BE RECOGNIZED
    // THIS REQUIRES CLEAN-UP IN THE REDUCER
    */
    var defaultCustomerData = {
        design:[''],
        performance:[''],
        outdoor:['']
    }
    return {
        ...defaultCustomerData,
        ...data
    }
}
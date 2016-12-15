export const SET_CUSTOMERS = 'SET_CUSTOMERS';
export const setCustomers = (customers) => {
    return {
        type: SET_CUSTOMERS,
        payload: customers
    }
}

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const addCustomer = (customer) => {
    return {
        type: ADD_CUSTOMER,
        payload: customer
    }
}

export const ADD_CUSTOMER_HOME = 'ADD_CUSTOMER_HOME';
export const addCustomerHome = (home) => {
    return {
        type: ADD_CUSTOMER_HOME,
        payload: home
    }
}

export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const updateCustomer = (customer) => {
    return {
        type: UPDATE_CUSTOMER,
        payload: customer
    }
}

export const UPDATE_CUSTOMER_HOME = 'UPDATE_CUSTOMER_HOME';
export const updateCustomerHome = (home) => {
    return {
        type: UPDATE_CUSTOMER_HOME,
        payload: home
    }
}

export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const removeCustomer = (customer) => {
    return {
        type: REMOVE_CUSTOMER,
        payload: customer
    }
}
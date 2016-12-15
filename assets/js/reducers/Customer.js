import * as CustomerActions from 'actions/Customer'

let initialState = {
    customers: []
}

function Customer(state = initialState, action) {
    switch (action.type) {
        case CustomerActions.SET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
            }
        case CustomerActions.ADD_CUSTOMER:
            var currentCustomers = [].concat(state.customers)
            currentCustomers.unshift( action.payload )
            return {
                ...state,
                customers: currentCustomers
            }
        case CustomerActions.ADD_CUSTOMER_HOME:
            var currentCustomers = [].concat(state.customers)
            // 1) FIND CUSTOMER WITH MATCHING CUSTOMER ID
            // 2) LOOK FOR CORRESPONDING HOUSE WITH MATCHING ID
            // 3A) UPDATE EXISTING HOME
            // 3B) ADD HOME TO CUSTOMER HOME ARRAY
            currentCustomers = currentCustomers.map(function(customer){
                if (customer.id == action.payload.customer) {
                    var matchedHomes = customer.homes.filter(function(home){
                        return home.id == action.payload.id
                    })
                    if (matchedHomes.length > 0) {
                        customer.homes = customer.homes.map(function(home){
                            if (home.id == action.payload.id) home = action.payload
                            return home
                        })
                    } else {
                        customer.homes.push( action.payload )
                    }
                }
                return customer
            })
            return {
                ...state,
                customers: currentCustomers
            }
        case CustomerActions.UPDATE_CUSTOMER:
            var currentCustomers = [].concat( state.customers )
            currentCustomers = currentCustomers.map(function(customer){
                if (customer.id == action.payload.id) {
                    return {
                        ...customer,
                        ...action.payload
                    }
                }
                return customer
            })
            return {
                ...state,
                customers: currentCustomers
            }
        case CustomerActions.UPDATE_CUSTOMER_HOME:
            var currentCustomers = [].concat( state.customers )
            // 1) FIND CUSTOMER WITH MATCHING CUSTOMER ID
            // 2) LOOK FOR CORRESPONDING HOUSE WITH MATCHING ID
            // 3) UPDATE STATE WITH NEW HOME, BUT PRESERVE OLD CUSTOMER PROPERTY
            currentCustomers = currentCustomers.map(function(customer){
                if (customer.id == action.payload.customer.id) {
                    customer.homes = customer.homes.map(function(home){
                        if (home.id == action.payload.id) {
                            var customerOverwrite = {
                                customer: action.payload.customer.id
                            }
                            return {
                                ...home,
                                ...action.payload,
                                ...customerOverwrite
                            }
                        }
                        return home
                    })        
                }
                return customer
            })
            return {
                ...state,
                customer: currentCustomers
            }
        case CustomerActions.REMOVE_CUSTOMER:
            var currentCustomers = [].concat( state.customers )
            currentCustomers = currentCustomers.filter(function(customer){
                return customer.id !== action.payload.id
            })
            return {
                ...state,
                customers: currentCustomers
            }
        default:
            return state
    }
}

export default Customer
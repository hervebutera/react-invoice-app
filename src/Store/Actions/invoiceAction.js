export const addInvoice = (newInvoice) => { 
    return {
        type: "ADD_INVOICE",
        payload: newInvoice,
    }
}
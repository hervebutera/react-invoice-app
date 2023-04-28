export const addInvoice = (newInvoice) => { 
    return {
        type: "ADD_INVOICE",
        payload: newInvoice,
    }
}

export const updateInvoice = (invoice) => {
    return {
      type: "UPDATE_INVOICE",
      payload: invoice,
    };
};
  
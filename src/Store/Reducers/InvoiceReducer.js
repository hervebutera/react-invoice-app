const innitialState = [
    {
        id: 1,
        invoiceCode: "RT340",
        senderAddress: {
            street: "KN 234 St",
            postCode: "P.O Box 234",
            city: "Kigali",
            country: "Rwanda"
        },
        clientAddress: {
            clientName: "Emmanuel Maniraguha",
            email: "emmamaniraguha@example.com",
            street: "SH 45 St",
            postCode: "P.O Box 367",
            city: "Huye",
            country: "Rwanda",
        },
        invoiceSentDate: "23/04/2023",
        paymentDeadlineDate: "23/05/2023",
        description: "Graphic design",
        items: [
            {
                itemName: "Marketing banners",
                quantity: 3,
                price: "100",
                itemTotal: "300",
            }
        ],
        grandTotal: "300",
        invoiceStatus: "Paid"
    },
    {   
        id: 2,
        invoiceCode: "RT340",
        senderAddress: {
            street: "KN 234 St",
            postCode: "P.O Box 234",
            city: "Kigali",
            country: "Rwanda"
        },
        clientAddress: {
            clientName: "Emmanuel Maniraguha",
            email: "emmamaniraguha@example.com",
            street: "SH 45 St",
            postCode: "P.O Box 367",
            city: "Huye",
            country: "Rwanda",
        },
        invoiceSentDate: "23/04/2023",
        paymentDeadlineDate: "23/05/2023",
        description: "Graphic design",
        items: [
            {
                itemName: "Marketing banners",
                quantity: 3,
                price: "100",
                itemTotal: "300",
            }
        ],
        grandTotal: "300",
        invoiceStatus: "Pending"
    }
];

const InvoiceReducer = (state = innitialState, action) => { 
    return state;
}

export default InvoiceReducer;
const innitialState = [
  {
    id: 1,
    invoiceCode: "RT340",
    senderStreetAddress: "KN 234 St",
    senderPostCode: "P.O Box 234",
    senderCityAddress: "Kigali",
    senderCountryAddress: "Rwanda",
    clientName: "Emmanuel Maniraguha",
    clientEmail: "emmamaniraguha@example.com",
    clientStreetAddress: "SH 45 St",
    clientPostCode: "P.O Box 367",
    clientCityAddress: "Huye",
    clientCountryAddress: "Rwanda",
    invoiceSentDate: "23/04/2023",
    paymentDeadlineDate: "23/05/2023",
    duePaymentDays: "30",
    description: "Graphic design",
    items: [
      {
        id: 0,
        itemName: "Marketing banners",
        quantity: 3,
        price: 100,
        itemTotal: 300,
      },
    ],
    grandTotal: 300,
    invoiceStatus: "Paid",
  },
  {
    id: 2,
    invoiceCode: "RT340",
    senderStreetAddress: "KN 234 St",
    senderPostCode: "P.O Box 234",
    senderCityAddress: "Kigali",
    senderCountryAddress: "Rwanda",
    clientName: "Richard Niyomugabo",
    clientEmail: "richardniyomugabo@example.com",
    clientStreetAddress: "KK 57 St",
    clientPostCode: "P.O Box 409",
    clientCityAddress: "Kicukiro",
    clientCountryAddress: "Rwanda",
    invoiceSentDate: "22/02/2023",
    paymentDeadlineDate: "24/03/2023",
    duePaymentDays: "30",
    description: "Social media marketing",
    items: [
      {
        id: 0,
        itemName: "Instagram Posts",
        quantity: 2,
        price: 300,
        itemTotal: 600,
      },
    ],
    grandTotal: 600,
    invoiceStatus: "Pending",
  },
];

const InvoiceReducer = (state = innitialState, action) => {
  switch (action.type) {
    case "ADD_INVOICE":
      state = [
        ...state,
        action.payload
      ];
      break;
    case "UPDATE_INVOICE":
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          let newState = [...state];
          newState[i] = action.payload;
          state = newState;
        }
      }
      break;
    case "DELETE_INVOICE":
      state = state.filter(invoice => {
        return invoice.id !== action.payload;
      });
      break;
    default:
      break;
  }
  return state;
};

export default InvoiceReducer;

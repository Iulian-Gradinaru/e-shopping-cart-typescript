// import React, { useState } from 'react';
// // import './CreditCardForm.css'; // Stilizarea CSS pentru formular
// import { useHistory } from 'react-router-dom'; // Importă useHistory pentru redirecționare

// import {
//   CreditCard,
//   CreditCardChip,
//   InputField,
//   CreditCardInfo,
// } from './CreditCardForm.styles';

// interface FormData {
//   cardNumber: string;
//   cardHolder: string;
//   expirationDate: string;
//   cvv: string;
// }

// export const CreditCardForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     cardNumber: '',
//     cardHolder: '',
//     expirationDate: '',
//     cvv: '',
//   });

//   const history = useHistory(); // Inițializează history pentru redirecționare

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent): void => {
//     e.preventDefault();

//     history.push('/message');
//   };

//   return (
//     <CreditCard className="credit-card">
//       <CreditCardChip className="credit-cardchip"></CreditCardChip>
//       <form style={{ width: '100%' }} onSubmit={handleSubmit}>
//         <div className="credit-cardnumber">
//           <label htmlFor="cardNumber">Card Number</label>
//           <InputField
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleInputChange}
//             maxLength={19}
//             placeholder="   "
//             required
//           />
//         </div>
//         <CreditCardInfo className="credit-cardinfo">
//           <div className="credit-cardinfo-item">
//             <label htmlFor="cardHolder">Card Holder</label>
//             <input
//               type="text"
//               id="cardHolder"
//               name="cardHolder"
//               value={formData.cardHolder}
//               onChange={handleInputChange}
//               placeholder="Full Name"
//               required
//             />
//           </div>
//           <div className="credit-cardinfo-item">
//             <label htmlFor="expirationDate">Expiration Date</label>
//             <input
//               type="text"
//               id="expirationDate"
//               name="expirationDate"
//               value={formData.expirationDate}
//               onChange={handleInputChange}
//               maxLength={5}
//               placeholder="MM/YY"
//               required
//             />
//           </div>
//           <div className="credit-cardinfo-item">
//             <label htmlFor="cvv">CVV</label>
//             <input
//               type="text"
//               id="cvv"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleInputChange}
//               maxLength={3}
//               placeholder="123"
//               required
//             />
//           </div>
//         </CreditCardInfo>
//       </form>
//     </CreditCard>
//   );
// };

import React, { useState } from 'react';
import {
  ExpirationCvcContainer,
  PaymentFormContainer,
  StyledCreditCardInput,
} from './CreditCardForm.styles';

// Definim o interfață pentru datele de intrare ale formularului
interface FormData {
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  ownerName: string;
}

export const CreditCardForm: React.FC = () => {
  // Inițializăm starea pentru datele formularului
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    ownerName: '',
  });

  // Funcție pentru a gestiona schimbările în câmpurile de intrare
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === 'ownerName') {
      // Pentru câmpul "Owner Name", nu aplicăm restricții
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      // Pentru celelalte câmpuri, verificăm dacă valoarea introdusă este numerică înainte de a actualiza starea
      if (/^[0-9]*$/.test(value) || value === '') {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };

  return (
    <PaymentFormContainer>
      <StyledCreditCardInput
        label="Card Number"
        variant="outlined"
        fullWidth
        type="text"
        inputProps={{
          maxLength: 16,
          inputMode: 'numeric', // Acceptă doar caractere numerice
        }}
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleInputChange}
        required
      />
      <ExpirationCvcContainer>
        <StyledCreditCardInput
          label="Expiration Date"
          variant="outlined"
          type="text"
          inputProps={{
            maxLength: 5,
            inputMode: 'numeric', // Acceptă doar caractere numerice
          }}
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleInputChange}
          required
        />
        <StyledCreditCardInput
          label="CVC"
          variant="outlined"
          type="text"
          inputProps={{
            maxLength: 3,
            inputMode: 'numeric', // Acceptă doar caractere numerice
          }}
          name="cvc"
          value={formData.cvc}
          onChange={handleInputChange}
          required
        />
      </ExpirationCvcContainer>
      <StyledCreditCardInput
        label="Owner Name"
        variant="outlined"
        fullWidth
        type="text"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleInputChange}
        required
      />
    </PaymentFormContainer>
  );
};

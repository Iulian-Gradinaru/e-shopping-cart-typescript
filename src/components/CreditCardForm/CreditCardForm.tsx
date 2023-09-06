import React, { useState } from 'react';
import './CreditCardForm.css'; // Stilizarea CSS pentru formular
import { useHistory } from 'react-router-dom'; // Importă useHistory pentru redirecționare

interface FormData {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}

export const CreditCardForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const history = useHistory(); // Inițializează history pentru redirecționare

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    history.push('/message');
  };

  return (
    <div className="credit-card">
      <div className="credit-cardchip"></div>
      <form onSubmit={handleSubmit}>
        <div className="credit-cardnumber">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            maxLength={19}
            placeholder="   "
            required
          />
        </div>
        <div className="credit-cardinfo">
          <div className="credit-cardinfo-item">
            <label htmlFor="cardHolder">Card Holder</label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="credit-cardinfo-item">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              maxLength={5}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="credit-cardinfo-item">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              maxLength={3}
              placeholder="123"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

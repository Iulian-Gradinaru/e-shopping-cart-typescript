import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import {
  Typography,
  FormControl,
  MenuItem,
  TextareaAutosize,
  SelectChangeEvent,
  InputLabel,
  Select,
} from '@mui/material';
import { CreditCardForm } from '../CreditCardForm';
import {
  Container,
  FormSectionShiping,
  FormSectionBilling,
  FormSectionPayment,
  FormSectionComments,
  FormTitle,
  SubmitButton,
  CustomTextField,
} from './Checkout.styles';

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const history = useHistory();

  const handlePaymentMethodChange = (e: SelectChangeEvent<string>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    // Redirect către ruta "message"
    history.push('/message');
  };

  return (
    <Container>
      {/* Folosim un formular pentru a gestiona trimiterea */}
      <form onSubmit={handleSubmit}>
        <FormTitle variant="h1">Payments</FormTitle>

        <FormSectionShiping>
          <Typography variant="h5">Shipping Address</Typography>
          <CustomTextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <CustomTextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <CustomTextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </FormSectionShiping>

        <FormSectionBilling>
          <Typography variant="h5">Billing Address</Typography>
          <CustomTextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <CustomTextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <CustomTextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </FormSectionBilling>

        <FormSectionPayment>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Payment Method</InputLabel>
            <Select
              style={{ backgroundColor: '#fff' }}
              label="Payment Method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              required
            >
              <MenuItem value="cash">Cash on Delivery</MenuItem>
              <MenuItem value="card">Credit Card</MenuItem>
            </Select>
          </FormControl>
        </FormSectionPayment>

        {paymentMethod === 'card' && <CreditCardForm />}

        <FormSectionComments>
          <Typography variant="h5">Additional Comments</Typography>
          <TextareaAutosize
            minRows={4}
            placeholder="Add your comments here..."
            style={{ width: '100%' }}
          />
        </FormSectionComments>
        {/* Butonul de submit trebuie să fie de tip "submit" pentru a declanșa trimiterea */}
        <SubmitButton type="submit" variant="contained">
          Submit Order
        </SubmitButton>
      </form>
    </Container>
  );
};

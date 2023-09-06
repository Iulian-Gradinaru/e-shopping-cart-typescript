import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom';
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import { CreditCardForm } from '../CreditCardForm';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
});

const FormTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
});

const FormSection = styled('div')({
  marginBottom: '16px',
});

const SubmitButton = styled(Button)({
  backgroundColor: '#007bff',
  color: '#fff',
  marginTop: '16px',
});

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

        <FormSection>
          <Typography variant="h5">Shipping Address</Typography>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </FormSection>

        <FormSection>
          <Typography variant="h5">Billing Address</Typography>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </FormSection>

        <FormSection>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Payment Method</InputLabel>
            <Select
              label="Payment Method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              required
            >
              <MenuItem value="cash">Cash on Delivery</MenuItem>
              <MenuItem value="card">Credit Card</MenuItem>
            </Select>
          </FormControl>
        </FormSection>

        {paymentMethod === 'card' && <CreditCardForm />}

        <FormSection>
          <Typography variant="h5">Additional Comments</Typography>
          <TextareaAutosize
            minRows={4}
            placeholder="Add your comments here..."
            style={{ width: '100%' }}
          />
        </FormSection>
        {/* Butonul de submit trebuie să fie de tip "submit" pentru a declanșa trimiterea */}
        <SubmitButton type="submit" variant="contained">
          Submit Order
        </SubmitButton>
      </form>
    </Container>
  );
};

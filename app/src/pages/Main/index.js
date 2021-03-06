import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, SectionContainer, RegisterUser } from './styles';
import HeaderComponent from '../../components/Header';
import MessageOk from '../../components/SuccessInfo';
import api from '../../services/api';

export default function Main() {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  async function handleSuccessMessage(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      cpf,
      phone,
      cep,
      street,
      city,
      state,
      neighborhood,
      number,
      complement,
    };

    try {
      await api.post('users', data);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (err) {
      toast.error('Erro ao cadastrar, tente novamente!');
    }
  }

  return (
    <Container>
      {success && <MessageOk />}
      <HeaderComponent />

      <SectionContainer>
        <h2>Cadastre aqui seus novos clientes.</h2>
      </SectionContainer>

      <RegisterUser>
        <legend>
          <p>Dados necessários</p>
        </legend>
        <form onSubmit={handleSuccessMessage}>
          <input
            placeholder="Nome completo"
            autoComplete="false"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Melhor e-mail"
            autoComplete="false"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="field_group">
            <input
              placeholder="CPF"
              autoComplete="false"
              required
              onChange={(e) => setCpf(e.target.value)}
            />

            <input
              placeholder="Telefone"
              autoComplete="false"
              required
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              placeholder="CEP"
              autoComplete="false"
              required
              onChange={(e) => setCep(e.target.value)}
            />
          </div>

          <input
            placeholder="Endereço"
            autoComplete="false"
            required
            onChange={(e) => setStreet(e.target.value)}
          />

          <div className="field_group">
            <input
              placeholder="Cidade"
              autoComplete="false"
              required
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              placeholder="Estado"
              maxLength="2"
              autoComplete="false"
              required
              onChange={(e) => setState(e.target.value)}
            />

            <input
              placeholder="Bairro"
              autoComplete="false"
              required
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </div>

          <div className="field_group">
            <input
              placeholder="Rua"
              autoComplete="false"
              onChange={(e) => setStreet(e.target.value)}
            />

            <input
              placeholder="Número"
              autoComplete="false"
              onChange={(e) => setNumber(e.target.value)}
            />

            <input
              placeholder="Complemento"
              autoComplete="false"
              onChange={(e) => setComplement(e.target.value)}
            />
          </div>

          <legend>
            <p>Dados secundários(Opcional)</p>
          </legend>

          <input
            placeholder="Endereço Alternativo"
            autoComplete="false"
            onChange={(e) => setStreet(e.target.value)}
          />

          <div className="field_group">
            <input
              placeholder="Telefone"
              autoComplete="false"
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              placeholder="Número"
              autoComplete="false"
              onChange={(e) => setNumber(e.target.value)}
            />

            <input
              placeholder="Complemento"
              autoComplete="false"
              onChange={(e) => setComplement(e.target.value)}
            />
          </div>

          <button type="submit">Salvar novo usuário</button>
        </form>
      </RegisterUser>
    </Container>
  );
}

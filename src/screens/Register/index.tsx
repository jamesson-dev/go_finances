import React from 'react';

import { Input } from '../../components/Forms/Input';

import { 
    Container,
    Header,
    Title,
    Form 
} from './styles'

export function Register(){
    return (
        <Container>
        <Header>
            <Title>Cadastro</Title>
        </Header>

        <Form>
            <Input 
                placeholder='name'
            />
            <Input 
                placeholder='preço'
            />
        </Form>

        </Container>
    )
}

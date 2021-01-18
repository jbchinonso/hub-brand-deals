import React from 'react'
import { Container,FormWrap,Icon, LogoU, FormContent, Form, FormH1, FormLabel, FormInput,TextArea, FormButton, Text } from './ContactElements'

const Contact = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">H<LogoU>U</LogoU>B</Icon>
                    <FormContent>
                        <Form action="mailto:praisebars@gmail.com" method="post" enctype="text/plain">
                            <FormH1>Please Send Us an Email</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" name="Email" required />
                            <FormLabel htmlFor="for"> Fullname </FormLabel>
                            <FormInput type="text" name="Fullname" required />
                            <FormLabel htmlFor="for"> Message </FormLabel>
                            <TextArea name="Message" required />
                            <FormButton type="submit" name="submit">Continue</FormButton>
                            <Text>This form send's us a mail</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default Contact

import * as yup from "yup";

export const loginValidator = yup.object({
    email: yup.string().email('Informe um e-mail válido').required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
}).required();

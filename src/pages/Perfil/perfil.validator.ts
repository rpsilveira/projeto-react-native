import * as yup from "yup";

export const perfilValidator = yup.object({
    email: yup.string().email('Informe um e-mail válido').required('E-mail é obrigatório'),
    password: yup.string().min(6,'A senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
    newPassword: yup.string().min(6,'A senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
    confirm: yup.string().oneOf([yup.ref('newPassword'), null], 'Senha precisa ser igual').required('Confirme a senha'),
}).required();

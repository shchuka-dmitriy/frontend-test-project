import * as yup from 'yup';

export default {
    LoginRegistrationSchema: yup.object().shape({
        username: yup.string().test('test-username','required',value => (value && value.trim().length>=1)).required('Username field is required'),
        password: yup.string().test('test-password','min 6 symbols',value => (value && value.trim().length>=6)).required('Password field is required')
    }),
    ReviewSchema: yup.object().shape({
        text: yup.string().test('test-review','required',value => (value && value.trim().length>=1)).required('Review field is required'),
    })
}

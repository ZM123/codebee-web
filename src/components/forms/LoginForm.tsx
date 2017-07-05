import './LoginForm.scss';

import * as React from 'react';
import { reduxForm, SubmissionError } from 'redux-form';

import LoginMutation from '../../mutations/LoginMutation';

import Form, { Props as FormProps } from '../ui/Form';
import { InputField } from '../ui/Input';
import Button from '../ui/Button';
import FormButtons from '../ui/FormButtons';

export class LoginForm extends React.Component<FormProps> {
  render() {
    const { submitting } = this.props;
    return (
      <Form className="LoginForm" {...this.props}>
        <InputField type="text" label="Email" name="email" />
        <InputField type="password" label="Password" name="password" />
        <FormButtons align="center">
          <Button className="LoginForm-button" type="submit" primary>
            {submitting ? 'Logging in' : 'Login'}
          </Button>
        </FormButtons>
      </Form>
    );
  }
}

const LoginReduxForm = reduxForm({
  form: 'LoginForm',
  validate: LoginMutation.validate,
  onSubmit: async (values: any) => {
    try {
      await LoginMutation.commit(values);
    } catch (e) {
      throw new SubmissionError({ _error: e.source.errors[0].message });
    }
  }
})(LoginForm);

export default LoginReduxForm;

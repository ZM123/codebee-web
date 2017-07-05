import './RegistrationForm.scss';

import * as React from 'react';
import { reduxForm, SubmissionError } from 'redux-form';

import RegisterMutation from '../../mutations/RegisterMutation';

import Form, { Props as FormProps } from '../ui/Form';
import { InputField } from '../ui/Input';
import Button from '../ui/Button';
import FormButtons from '../ui/FormButtons';

export class RegistrationForm extends React.Component<FormProps> {
  render() {
    const { submitting } = this.props;
    return (
      <Form className="RegistrationForm" {...this.props}>
        <InputField type="text" label="Name" name="name" />
        <InputField type="text" label="Display Name" name="username" />
        <InputField type="text" label="Email" name="email" />
        <InputField type="password" label="Password" name="password" />
        <FormButtons align="center">
          <Button className="RegistrationForm-button" type="submit" primary>
            {submitting ? 'Creating account' : 'Register'}
          </Button>
        </FormButtons>
      </Form>
    );
  }
}

const RegistrationReduxForm = reduxForm({
  form: 'RegistrationForm',
  validate: RegisterMutation.validate,
  onSubmit: async (values: any) => {
    try {
      await RegisterMutation.commit(values);
    } catch (e) {
      throw new SubmissionError({ _error: e.source.errors[0].message });
    }
  }
})(RegistrationForm);

export default RegistrationReduxForm;

import { useState } from 'react';

function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleChange: ({ target }) => {
      const { name, value } = target;
      setValues({ ...values, [name]: value });
    },
    handleImage() {
      const { url } = values;
      const img = url.includes('.be/')
        ? url.split('be/')[1]
        : url.split('v=')[1];
      setValues({ ...values, img });
    },
    clearForm() {
      setValues({
        title: '',
        url: '',
        img: '',
      });
    },
  };
}

export default useForm;

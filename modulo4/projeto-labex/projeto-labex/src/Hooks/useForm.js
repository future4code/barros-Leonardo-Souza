import { useState } from "react";

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  // eslint-disable-next-line no-unused-vars
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return[ form, onChange ]
}
